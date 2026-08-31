import uuid
from collections import Counter
from typing import List

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import scoring
from database import Base, engine, get_db

Base.metadata.create_all(bind=engine)  # для SQLite/локальной разработки; в проде — Alembic-миграции
import seed_data
import seed_data.seed()
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
def _profile_from_user(user: models.User) -> schemas.Profile:
    return schemas.Profile(
        gpa=user.gpa,
        tests=schemas.Tests.model_validate(user.tests or {}),
        major=user.major,
        degree_level=user.degree_level,
        size=user.size,
        setting=user.setting,
        climate=user.climate,
        research=user.research,
        budget=user.budget,
        needs_aid=user.needs_aid,
        continents=user.continents or [],
        countries=user.countries or [],
    )


def _apply_profile_to_user(user: models.User, profile: schemas.Profile) -> None:
    user.gpa = profile.gpa
    user.tests = profile.tests.model_dump()
    user.major = profile.major
    user.degree_level = profile.degree_level
    user.size = profile.size
    user.setting = profile.setting
    user.climate = profile.climate
    user.research = profile.research
    user.budget = profile.budget
    user.needs_aid = profile.needs_aid
    user.continents = profile.continents
    user.countries = profile.countries


def _user_out(user: models.User) -> schemas.UserOut:
    return schemas.UserOut(
        id=user.id,
        guest_id=user.guest_token,
        is_registered=not user.is_guest,
        email=user.email,
        lang=user.lang,
        profile=_profile_from_user(user),
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
def create_or_update_guest(payload: schemas.UserCreate, db: Session = Depends(get_db)):
    """
    Онбординг без обязательной регистрации — эквивалент saveGuestSession() на фронте.
    Если guest_id уже есть в БД — обновляем профиль существующего гостя (например,
    он прошёл онбординг заново или поменял фильтры на Discover). Если нет — создаём
    нового пользователя с этим guest_id (или генерируем новый, если не передан).
    """
    user = None
    if payload.guest_id:
        user = db.query(models.User).filter(models.User.guest_token == payload.guest_id).first()

    if not user:
        user = models.User(guest_token=payload.guest_id or str(uuid.uuid4()), is_guest=True)
        db.add(user)

    user.lang = payload.lang
    _apply_profile_to_user(user, payload.profile)

    db.commit()
    db.refresh(user)
    return _user_out(user)


@app.post("/users/{user_id}/register", response_model=schemas.UserOut)
def register_email(user_id: int, payload: schemas.RegisterEmail, db: Session = Depends(get_db)):
    """«Мягкая» регистрация: гость оставляет email, чтобы не потерять список Matches
    (тот же user.id, is_guest становится False — как isRegistered=true на фронте)."""
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")
    existing = db.query(models.User).filter(models.User.email == payload.email).first()
    if existing and existing.id != user.id:
        raise HTTPException(400, "Этот email уже привязан к другому аккаунту")
    user.email = payload.email
    user.is_guest = False
    db.commit()
    db.refresh(user)
    return _user_out(user)


@app.get("/users/{user_id}", response_model=schemas.UserOut)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")
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
def record_swipe(user_id: int, payload: schemas.SwipeCreate, db: Session = Depends(get_db)):
    """Записывает Like/Dislike — implicit feedback для фазы 2 (ML)."""
    user = db.get(models.User, user_id)
    uni = db.get(models.University, payload.university_id)
    if not user or not uni:
        raise HTTPException(404, "User or university not found")

    swipe = models.Swipe(user_id=user_id, university_id=payload.university_id, liked=payload.liked)
    db.add(swipe)
    db.commit()
    return {"status": "recorded"}


@app.delete("/users/{user_id}/swipes/{university_id}")
def delete_swipe(user_id: int, university_id: int, db: Session = Depends(get_db)):
    """
    Отменяет свайп по конкретному вузу — нужно для кнопки "Save"/"In Matches" на
    странице вуза (toggleLike на фронте): если вуз уже лайкнут, повторное нажатие
    должно убрать его из Matches, а не просто дописать ещё один свайп поверх.
    После удаления вуз снова может появиться в /universities (уже не в already_swiped).
    """
    deleted = db.query(models.Swipe).filter(
        models.Swipe.user_id == user_id, models.Swipe.university_id == university_id
    ).delete()
    db.commit()
    return {"status": "deleted", "count": deleted}


# ---------------------------------------------------------------- matches
@app.get("/users/{user_id}/matches", response_model=List[schemas.UniversityMatchOut])
def get_matches(user_id: int, db: Session = Depends(get_db)):
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")
    profile = _profile_from_user(user)

    liked_ids = [s.university_id for s in user.swipes if s.liked]
    unis = db.query(models.University).filter(models.University.id.in_(liked_ids)).all()

    results = [_match_out(u, profile) for u in unis]
    results.sort(key=lambda x: x.match_score, reverse=True)
    return results


# ---------------------------------------------------------------- University DNA
@app.get("/users/{user_id}/dna", response_model=schemas.DNAOut)
def get_dna(user_id: int, db: Session = Depends(get_db)):
    """Эквивалент computeDNA() на фронте — тот же радар-чарт "University DNA"."""
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")

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
