import json
import uuid
from collections import Counter
from typing import List

import secrets

from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import scoring
import auth
from database import Base, engine, get_db
import seed_data
seed_data.seed()
Base.metadata.create_all(bind=engine)  # для SQLite/локальной разработки; в проде — Alembic-миграции


# ---------------------------------------------------------------- migrations (SQLite)
def _migrate_sqlite():
    """
    create_all не добавляет колонки в уже существующие таблицы — только создаёт
    новые. Если unimatch.db создан старой версией кода (без users.password_hash),
    докидываем колонку руками, иначе SQLAlchemy упадёт на первом же SELECT users.
    Для PostgreSQL это дело Alembic; здесь локальная разработка на SQLite.
    """
    with engine.connect() as conn:
        cols = [row[1] for row in conn.exec_driver_sql("PRAGMA table_info(users)")]
        # password_hash нужен для /auth/login; home_country/native_lang — новые
        # поля профиля (шаг "About you" на фронте). Всё остальное во фронтовом
        # payload уже помещается в существующие колонки.
        for col, ddl in (
            ("password_hash", "ALTER TABLE users ADD COLUMN password_hash VARCHAR"),
            ("home_country", "ALTER TABLE users ADD COLUMN home_country VARCHAR DEFAULT ''"),
            ("native_lang", "ALTER TABLE users ADD COLUMN native_lang VARCHAR DEFAULT ''"),
        ):
            if cols and col not in cols:
                conn.exec_driver_sql(ddl)
        conn.commit()


_migrate_sqlite()


def _normalize_email(email: str) -> str:
    return (email or "").strip().lower()


def _valid_email(email: str) -> bool:
    import re
    return bool(re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", email))


# ---------------------------------------------------------------- sessions / access control
def _bearer_token(request: Request) -> str:
    authz = request.headers.get("authorization", "")
    if authz.startswith("Bearer "):
        return authz[len("Bearer "):].strip()
    return ""


def _issue_session(db: Session, user_id: int) -> str:
    """Создаёт серверную сессию, возвращает непрозрачный токен."""
    token = secrets.token_urlsafe(32)
    db.add(models.AuthSession(token=token, user_id=user_id))
    return token


def _require_access(db: Session, user_id: int, request: Request) -> models.User:
    """
    Контроль доступа к персональным данным. Гость — открытый демо-доступ (его
    «пароль» — секретный guestId, который клиент шлёт в POST /users). А вот
    зарегистрированный пользователь должен предъявить токен сессии из
    Authorization: Bearer — знание числового id или guestId чужого аккаунта
    не даёт доступ к его профилю, свайпам и Matches.
    """
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")
    if not user.is_guest:
        token = _bearer_token(request)
        sess = (
            db.query(models.AuthSession)
            .filter(models.AuthSession.token == token, models.AuthSession.user_id == user_id)
            .first()
        ) if token else None
        if not sess:
            raise HTTPException(401, "Нужно войти заново")
    return user


app = FastAPI(title="UniMatch API")

# unimatch-demo.html сейчас открывается как отдельный файл / с другого origin,
# поэтому без CORS браузер будет молча блокировать все запросы к этому API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------- profile <-> User helpers
def _db_from_list(value):
    """Массив предпочтений -> строка для колонки VARCHAR (JSON). Пустой -> None."""
    if isinstance(value, (list, tuple)):
        return json.dumps(list(value)) if value else None
    return value  # легаси: одиночная строка


def _list_from_db(value):
    """Колонка VARCHAR -> массив предпочтений. Понимает три варианта:
    None -> [], JSON-массив (новый формат), одиночная строка (легаси) -> [value]."""
    if value is None:
        return []
    if isinstance(value, (list, tuple)):
        return list(value)
    try:
        parsed = json.loads(value)
        if isinstance(parsed, list):
            return parsed
    except (ValueError, TypeError):
        pass
    return [value]


def _profile_from_user(user: models.User) -> schemas.Profile:
    return schemas.Profile(
        gpa=user.gpa,
        tests=schemas.Tests.model_validate(user.tests or {}),
        major=user.major,
        degree_level=user.degree_level,
        size=_list_from_db(user.size),
        setting=_list_from_db(user.setting),
        climate=_list_from_db(user.climate),
        research=user.research,
        budget=user.budget,
        needs_aid=user.needs_aid,
        continents=user.continents or [],
        countries=user.countries or [],
        home_country=user.home_country or "",
        native_lang=user.native_lang or "",
    )


def _apply_profile_to_user(user: models.User, profile: schemas.Profile) -> None:
    user.gpa = profile.gpa
    user.tests = profile.tests.model_dump()
    user.major = profile.major
    user.degree_level = profile.degree_level
    user.size = _db_from_list(profile.size)
    user.setting = _db_from_list(profile.setting)
    user.climate = _db_from_list(profile.climate)
    user.home_country = profile.home_country or ""
    user.native_lang = profile.native_lang or ""
    user.research = profile.research
    user.budget = profile.budget
    user.needs_aid = profile.needs_aid
    user.continents = profile.continents
    user.countries = profile.countries


def _user_out(user: models.User, session_token: str = None) -> schemas.UserOut:
    return schemas.UserOut(
        id=user.id,
        guest_id=user.guest_token,
        is_registered=not user.is_guest,
        email=user.email,
        lang=user.lang,
        profile=_profile_from_user(user),
        session_token=session_token,
    )


def _uni_out(uni: models.University, cls=schemas.UniversityOut, **extra) -> schemas.UniversityOut:
    return cls(
        id=uni.id, name=uni.name, city=uni.city, country=uni.country, continent=uni.continent,
        cost=uni.cost, acceptance=uni.acceptance,
        gpa25=uni.gpa25, gpa75=uni.gpa75, sat25=uni.sat25, sat75=uni.sat75,
        size=uni.size, setting=uni.setting, climate=uni.climate,
        research=uni.research, cs=uni.cs, tags=uni.tags or [],
        aid=schemas.AidInfo(level=uni.aid_level, merit=uni.aid_merit, note=uni.aid_note),
        **extra,
    )


def _match_out(uni: models.University, profile: schemas.Profile) -> schemas.UniversityMatchOut:
    return _uni_out(
        uni, cls=schemas.UniversityMatchOut,
        match_score=scoring.match_score(uni, profile),
        admission_reality=scoring.admission_reality(uni, profile),
    )


# ---------------------------------------------------------------- users / guest sessions
@app.post("/users", response_model=schemas.UserOut)
def create_or_update_guest(payload: schemas.UserCreate, db: Session = Depends(get_db), request: Request = None):
    """
    Онбординг без обязательной регистрации — эквивалент saveGuestSession() на фронте.
    Если guest_id уже есть в БД — обновляем профиль существующего гостя (например,
    он прошёл онбординг заново или поменял фильтры на Discover). Если нет — создаём
    нового пользователя с этим guest_id (или генерируем новый, если не передан).
    """
    user = None
    if payload.guest_id:
        user = db.query(models.User).filter(models.User.guest_token == payload.guest_id).first()
        # Апдейт профиля зарегистрированного аккаунта по одному guestId — это
        # смена чужих данных без предъявления сессии: требуем токен.
        if user and not user.is_guest:
            _require_access(db, user.id, request)

    if not user:
        user = models.User(guest_token=payload.guest_id or str(uuid.uuid4()), is_guest=True)
        db.add(user)

    user.lang = payload.lang
    _apply_profile_to_user(user, payload.profile)

    db.commit()
    db.refresh(user)
    return _user_out(user)


@app.post("/users/{user_id}/register", response_model=schemas.UserOut)
def register_email(user_id: int, payload: schemas.RegisterEmail, db: Session = Depends(get_db), request: Request = None):
    """«Мягкая» регистрация: гость оставляет email, чтобы не потерять список Matches
    (тот же user.id, is_guest становится False — как isRegistered=true на фронте).
    Пароль не задаёт — для входа потом нужно до-регистрироваться через /auth/register
    с тем же email (guest-данные при этом «усыновятся», если передать guestId)."""
    user = _require_access(db, user_id, request)
    email = _normalize_email(payload.email)
    if not _valid_email(email):
        raise HTTPException(400, "Введи корректный email")
    existing = db.query(models.User).filter(models.User.email == email).first()
    if existing and existing.id != user.id:
        raise HTTPException(400, "Этот email уже привязан к другому аккаунту")
    user.email = email
    user.is_guest = False
    db.commit()
    db.refresh(user)
    return _user_out(user)


@app.post("/auth/register", response_model=schemas.UserOut)
def auth_register(payload: schemas.AuthRegister, db: Session = Depends(get_db)):
    """
    Настоящая регистрация с паролем. Контракт фронтенда (submitAuthForm →
    apiAuthRegister): {email, password, lang, guestId} → UserOut — тот же объект,
    что отдают /users и /users/{id}. Пароль хранится только как PBKDF2-хеш
    (auth.py), в ответе его никогда нет.

    Ключевой сценарий: guestId передаётся при регистрации с онбординга/гостя —
    тогда email+пароль привязываются к уже существующему user, и весь прогресс
    (профиль, свайпы, Matches) сохраняется. Без guestId создаётся новый user
    с дефолтным профилем.
    """
    email = _normalize_email(payload.email)
    if not _valid_email(email):
        raise HTTPException(400, "Введи корректный email")
    if len(payload.password) < 6:
        raise HTTPException(400, "Пароль — минимум 6 символов")

    existing = db.query(models.User).filter(models.User.email == email).first()

    # «Усыновление» гостя: регистрируемся поверх текущей гостевой сессии.
    guest = None
    if payload.guest_id:
        guest = (
            db.query(models.User)
            .filter(models.User.guest_token == payload.guest_id)
            .first()
        )

    if existing and existing.password_hash:
        # Аккаунт с паролем уже есть — email занят. Ошибка намеренно не
        # раскрывает, есть ли у аккаунта пароль.
        raise HTTPException(400, "Этот email уже привязан к другому аккаунту")

    if guest and guest.password_hash:
        # Гостевая сессия уже привязана к аккаунту с паролем: регистрация с
        # новым email перезаписала бы этот аккаунт. Не допускаем.
        raise HTTPException(400, "Эта сессия уже привязана к аккаунту — войди")

    if existing:
        # Аккаунт существует, но без пароля — это «мягкая» email-регистрация.
        # Установить пароль можно только доказав владение гостевой сессией
        # этого же аккаунта (guestId): иначе любой, кто знает email, смог бы
        # захватить аккаунт вместе со списком Matches.
        if not guest or guest.id != existing.id:
            raise HTTPException(400, "Этот email уже привязан к другому аккаунту")
        user = existing
    elif guest:
        user = guest
    else:
        user = models.User(
            guest_token=payload.guest_id or str(uuid.uuid4()),
            is_guest=True,
        )
        db.add(user)

    user.email = email
    user.password_hash = auth.hash_password(payload.password)
    user.is_guest = False
    if payload.lang in ("ru", "en"):
        user.lang = payload.lang
    db.flush()  # присваиваем id новой записи до выдачи сессии
    token = _issue_session(db, user.id)
    db.commit()
    db.refresh(user)
    return _user_out(user, session_token=token)


@app.post("/auth/login", response_model=schemas.UserOut)
def auth_login(payload: schemas.AuthLogin, db: Session = Depends(get_db)):
    """
    Вход по email+паролю → UserOut. Фронт (submitAuthForm) дальше зовёт
    GET /users/{id} и грузит сессию как после создания пользователя.
    """
    email = _normalize_email(payload.email)
    user = db.query(models.User).filter(models.User.email == email).first()
    if (
        not user
        or not user.password_hash
        or not auth.verify_password(payload.password, user.password_hash)
    ):
        # Одна и та же ошибка и на «нет такого email», и на «неверный пароль» —
        # не раскрываем, существует ли аккаунт.
        raise HTTPException(401, "Неверный email или пароль")
    token = _issue_session(db, user.id)
    db.commit()
    return _user_out(user, session_token=token)


@app.post("/auth/logout")
def auth_logout(db: Session = Depends(get_db), request: Request = None):
    """Удаляет текущую сессию (по Bearer-токену). Идемпотентно: нет токена —
    всё равно 200."""
    token = _bearer_token(request)
    if token:
        db.query(models.AuthSession).filter(models.AuthSession.token == token).delete()
        db.commit()
    return {"ok": True}


@app.get("/users/{user_id}", response_model=schemas.UserOut)
def get_user(user_id: int, db: Session = Depends(get_db), request: Request = None):
    user = _require_access(db, user_id, request)
    return _user_out(user)


# ---------------------------------------------------------------- universities / deck
@app.get("/universities", response_model=List[schemas.UniversityMatchOut])
def list_universities(user_id: int, db: Session = Depends(get_db)):
    """
    Эквивалент buildDeck() на фронте: фильтрует по profile.continents/countries
    пользователя (их меняют через POST /users, включая toggle на Discover-экране),
    откатывается к полному списку если фильтр даёт пустой результат, исключает уже
    свайпнутые вузы (liked и disliked) и сортирует по Match Score по убыванию.
    """
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")
    profile = _profile_from_user(user)

    query = db.query(models.University)
    pool = query.all()
    if profile.continents or profile.countries:
        filtered = [
            u for u in pool
            if (not profile.continents or u.continent in profile.continents)
            and (not profile.countries or u.country in profile.countries)
        ]
        pool = filtered or pool  # deckFallback: пустой фильтр -> показываем всё

    already_swiped = {s.university_id for s in user.swipes}
    pool = [u for u in pool if u.id not in already_swiped]

    results = [_match_out(u, profile) for u in pool]
    results.sort(key=lambda x: x.match_score, reverse=True)
    return results


@app.get("/universities/{uni_id}/why", response_model=schemas.WhyOut)
def why_this_university(uni_id: int, user_id: int, db: Session = Depends(get_db)):
    uni = db.get(models.University, uni_id)
    user = db.get(models.User, user_id)
    if not uni or not user:
        raise HTTPException(404, "Not found")
    profile = _profile_from_user(user)
    return schemas.WhyOut(
        reasons=scoring.why_this_university(uni, profile),
        breakdown=scoring.match_breakdown(uni, profile),
    )


# ---------------------------------------------------------------- swipes
@app.post("/users/{user_id}/swipes")
def record_swipe(user_id: int, payload: schemas.SwipeCreate, db: Session = Depends(get_db), request: Request = None):
    """Записывает Like/Dislike — implicit feedback для фазы 2 (ML)."""
    user = _require_access(db, user_id, request)
    uni = db.get(models.University, payload.university_id)
    if not uni:
        raise HTTPException(404, "University not found")

    swipe = models.Swipe(user_id=user_id, university_id=payload.university_id, liked=payload.liked)
    db.add(swipe)
    db.commit()
    return {"status": "recorded"}


@app.delete("/users/{user_id}/swipes/{university_id}")
def delete_swipe(user_id: int, university_id: int, db: Session = Depends(get_db), request: Request = None):
    """
    Отменяет свайп по конкретному вузу — нужно для кнопки "Save"/"In Matches" на
    странице вуза (toggleLike на фронте): если вуз уже лайкнут, повторное нажатие
    должно убрать его из Matches, а не просто дописать ещё один свайп поверх.
    После удаления вуз снова может появиться в /universities (уже не в already_swiped).
    """
    _require_access(db, user_id, request)
    deleted = db.query(models.Swipe).filter(
        models.Swipe.user_id == user_id, models.Swipe.university_id == university_id
    ).delete()
    db.commit()
    return {"status": "deleted", "count": deleted}


# ---------------------------------------------------------------- matches
@app.get("/users/{user_id}/matches", response_model=List[schemas.UniversityMatchOut])
def get_matches(user_id: int, db: Session = Depends(get_db), request: Request = None):
    user = _require_access(db, user_id, request)
    profile = _profile_from_user(user)

    liked_ids = [s.university_id for s in user.swipes if s.liked]
    unis = db.query(models.University).filter(models.University.id.in_(liked_ids)).all()

    results = [_match_out(u, profile) for u in unis]
    results.sort(key=lambda x: x.match_score, reverse=True)
    return results


# ---------------------------------------------------------------- University DNA
@app.get("/users/{user_id}/dna", response_model=schemas.DNAOut)
def get_dna(user_id: int, db: Session = Depends(get_db), request: Request = None):
    """Эквивалент computeDNA() на фронте — тот же радар-чарт "University DNA"."""
    user = _require_access(db, user_id, request)

    liked_ids = [s.university_id for s in user.swipes if s.liked]
    liked = db.query(models.University).filter(models.University.id.in_(liked_ids)).all()

    if not liked:
        return schemas.DNAOut(cs=50, coastal=50, research=50, urban=50, cost_sensitive=50, warm=50, based_on_swipes=0)

    n = len(liked)
    settings = Counter(u.setting for u in liked)
    climates = Counter(u.climate for u in liked)

    return schemas.DNAOut(
        cs=round(sum(u.cs for u in liked) / n),
        coastal=round(100 * settings.get("Coastal", 0) / n),
        research=round(sum(u.research for u in liked) / n * 20),
        urban=round(100 * settings.get("Urban", 0) / n),
        cost_sensitive=round(100 - min(100, (sum(u.cost for u in liked) / n) / 700)),
        warm=round(100 * climates.get("Warm", 0) / n),
        based_on_swipes=n,
    )
