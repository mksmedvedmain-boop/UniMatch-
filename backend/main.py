import uuid
from collections import Counter
from typing import List, Optional

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

import models
import schemas
import scoring
from database import Base, engine, get_db

Base.metadata.create_all(bind=engine)  # для SQLite/локальной разработки; в проде — Alembic-миграции

app = FastAPI(title="UniMatch API (example)")


# ---------------------------------------------------------------- users / guest sessions
@app.post("/users", response_model=schemas.UserOut)
def create_or_update_guest(payload: schemas.UserCreate, db: Session = Depends(get_db)):
    """
    Онбординг без обязательной регистрации: фронтенд генерирует guest_token и хранит его
    в localStorage. Если такой guest_token уже есть в БД — просто обновляем профиль
    существующего гостя (например, он прошёл онбординг заново). Если нет — создаём нового
    пользователя. Так свайпы и профиль пишутся в БД с первой секунды, без email и пароля.
    """
    data = payload.model_dump(exclude={"guest_token"})

    user = None
    if payload.guest_token:
        user = db.query(models.User).filter(models.User.guest_token == payload.guest_token).first()

    if user:
        for field, value in data.items():
            setattr(user, field, value)
    else:
        user = models.User(**data, guest_token=payload.guest_token or str(uuid.uuid4()), is_guest=True)
        db.add(user)

    db.commit()
    db.refresh(user)
    return user


@app.post("/users/{user_id}/register", response_model=schemas.UserOut)
def register_email(user_id: int, payload: schemas.RegisterEmail, db: Session = Depends(get_db)):
    """
    "Мягкая" регистрация: гость решает не потерять список Matches и оставляет email —
    без пароля, чтобы не показывать полноценную форму регистрации. Гостевые данные
    (профиль, свайпы) при этом никуда не переносятся — это тот же user.id, просто
    is_guest становится False и появляется email для восстановления доступа с другого устройства.
    """
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
    return user


@app.get("/users/{user_id}", response_model=schemas.UserOut)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")
    return user


# ---------------------------------------------------------------- universities
@app.get("/universities", response_model=List[schemas.UniversityMatchOut])
def list_universities(
    user_id: int,
    continent: Optional[str] = None,
    country: Optional[str] = None,
    db: Session = Depends(get_db),
):
    """
    Отдаёт deck университетов для свайпа, отфильтрованный по региону
    и отсортированный по Match Score для конкретного пользователя.
    """
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")

    query = db.query(models.University)
    if continent:
        query = query.filter(models.University.continent == continent)
    if country:
        query = query.filter(models.University.country == country)

    already_swiped = {s.university_id for s in user.swipes}
    universities = [u for u in query.all() if u.id not in already_swiped]

    results = []
    for uni in universities:
        item = schemas.UniversityMatchOut(
            **schemas.UniversityOut.model_validate(uni).model_dump(),
            match_score=scoring.match_score(uni, user),
            admission_reality=scoring.admission_reality(uni, user),
        )
        results.append(item)

    results.sort(key=lambda x: x.match_score, reverse=True)
    return results


@app.get("/universities/{uni_id}/why")
def why_this_university(uni_id: int, user_id: int, db: Session = Depends(get_db)):
    uni = db.get(models.University, uni_id)
    user = db.get(models.User, user_id)
    if not uni or not user:
        raise HTTPException(404, "Not found")
    return {"reasons": scoring.why_this_university(uni, user)}


# ---------------------------------------------------------------- swipes
@app.post("/users/{user_id}/swipes")
def record_swipe(user_id: int, payload: schemas.SwipeCreate, db: Session = Depends(get_db)):
    """Записывает Like/Dislike. Это и есть implicit feedback, который фаза 2 (ML) будет анализировать."""
    user = db.get(models.User, user_id)
    uni = db.get(models.University, payload.university_id)
    if not user or not uni:
        raise HTTPException(404, "User or university not found")

    swipe = models.Swipe(user_id=user_id, university_id=payload.university_id, liked=payload.liked)
    db.add(swipe)
    db.commit()
    return {"status": "recorded"}


# ---------------------------------------------------------------- matches
@app.get("/users/{user_id}/matches", response_model=List[schemas.UniversityMatchOut])
def get_matches(user_id: int, db: Session = Depends(get_db)):
    """Список университетов, которые пользователь лайкнул — с Match Score и Admission Reality."""
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")

    liked_ids = [s.university_id for s in user.swipes if s.liked]
    universities = db.query(models.University).filter(models.University.id.in_(liked_ids)).all()

    results = [
        schemas.UniversityMatchOut(
            **schemas.UniversityOut.model_validate(uni).model_dump(),
            match_score=scoring.match_score(uni, user),
            admission_reality=scoring.admission_reality(uni, user),
        )
        for uni in universities
    ]
    results.sort(key=lambda x: x.match_score, reverse=True)
    return results


# ---------------------------------------------------------------- University DNA
@app.get("/users/{user_id}/dna", response_model=schemas.DNAOut)
def get_dna(user_id: int, db: Session = Depends(get_db)):
    """Агрегированный профиль по лайкнутым университетам — то же, что радар-чарт на фронтенде."""
    user = db.get(models.User, user_id)
    if not user:
        raise HTTPException(404, "User not found")

    liked_ids = [s.university_id for s in user.swipes if s.liked]
    liked = db.query(models.University).filter(models.University.id.in_(liked_ids)).all()

    if not liked:
        return schemas.DNAOut(
            cs_focused=50, coastal=50, research_oriented=50,
            urban=50, cost_sensitive=50, warm_climate=50, based_on_swipes=0,
        )

    n = len(liked)
    settings = Counter(u.setting for u in liked)
    climates = Counter(u.climate for u in liked)

    return schemas.DNAOut(
        cs_focused=round(sum(u.cs_strength for u in liked) / n),
        coastal=round(100 * settings.get("Coastal", 0) / n),
        research_oriented=round(sum(u.research_level for u in liked) / n * 20),
        urban=round(100 * settings.get("Urban", 0) / n),
        cost_sensitive=round(100 - min(100, (sum(u.cost for u in liked) / n) / 700)),
        warm_climate=round(100 * climates.get("Warm", 0) / n),
        based_on_swipes=n,
    )
