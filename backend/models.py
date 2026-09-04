from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, JSON
from sqlalchemy.orm import relationship
from copy import deepcopy
from database import Base

# Дефолты ниже намеренно совпадают с дефолтным state.profile из unimatch-demo.html,
# чтобы «пустой» пользователь на бэкенде выглядел точно так же, как гость на фронте
# до прохождения онбординга.
DEFAULT_TESTS = {
    "SAT": {"taken": True, "score": 1350},
    "ACT": {"taken": False, "score": 30},
    "IELTS": {"taken": False, "score": 7},
}


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    # Гостевая сессия: guestId генерируется на фронтенде и хранится в localStorage
    # (см. generateGuestId() / GUEST_KEY в unimatch-demo.html). Когда фронт подключится
    # к этому бэкенду, тот же guest_token начнёт использоваться как ключ синхронизации
    # вместо localStorage — сам объект user.profile при этом не меняется.
    guest_token = Column(String, unique=True, index=True, nullable=True)
    is_guest = Column(Boolean, default=True)  # == !isRegistered на фронте
    email = Column(String, unique=True, nullable=True)
    lang = Column(String, default="ru")  # "ru" | "en" — фронт двуязычный (STRINGS.ru / STRINGS.en)

    # Академический профиль (onboarding, шаг "Academic profile")
    gpa = Column(Float, default=3.6)
    # Три независимых теста, а не один test_type/test_score — фронт позволяет отметить
    # SAT, ACT и IELTS независимо (profile.tests.{SAT,ACT,IELTS}.{taken,score}).
    tests = Column(JSON, default=lambda: deepcopy(DEFAULT_TESTS))
    major = Column(String, default="Computer Science")  # свободная строка; список категорий — MAJOR_CATEGORIES на фронте
    degree_level = Column(String, default="bachelor")  # "bachelor" | "master" | "phd"

    # Предпочтения (onboarding, шаг "Preferences") — мульти-select: пользователь
    # может отметить сразу несколько вариантов (например, и "Small", и "Large"),
    # поэтому это списки, а не одиночная строка. Пустой список [] == "без
    # предпочтения", как раньше None.
    size = Column(JSON, default=list)      # subset of ["Small", "Medium", "Large"]
    setting = Column(JSON, default=list)   # subset of ["Urban", "Suburban", "Coastal"]
    climate = Column(JSON, default=list)   # subset of ["Warm", "Moderate", "Cold"]
    research = Column(Integer, default=3)     # 1-5
    budget = Column(Integer, default=40000)   # $/год
    needs_aid = Column(Boolean, nullable=True)  # None = не указано в онбординге

    # Регионы (onboarding, шаг "Where to study") — JSON-списки, как на фронте
    continents = Column(JSON, default=list)  # e.g. ["na", "eu"]
    countries = Column(JSON, default=list)   # e.g. ["USA", "Canada"]

    swipes = relationship("Swipe", back_populates="user")


class University(Base):
    __tablename__ = "universities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    city = Column(String)
    country = Column(String, index=True)
    continent = Column(String, index=True)  # "na" | "sa" | "eu" | "af" | "as" | "oc"

    cost = Column(Integer)             # $/год
    acceptance = Column(Float)         # 0.0 - 1.0 — общий acceptance rate

    # Средние 50% (25-й / 75-й перцентиль) поступивших — так Admission Reality на
    # фронте (admissionReality()) сравнивает профиль абитуриента с реальным Common
    # Data Set диапазоном, а не только с общим acceptance rate.
    gpa25 = Column(Float)
    gpa75 = Column(Float)
    sat25 = Column(Integer)
    sat75 = Column(Integer)

    size = Column(String)              # "Small" | "Medium" | "Large"
    setting = Column(String)           # "Urban" | "Suburban" | "Coastal"
    climate = Column(String)           # "Warm" | "Moderate" | "Cold"
    research = Column(Integer)         # 1-5
    cs = Column(Integer)               # 0-100, сила CS-программы (сознательно единственная
                                        # оцениваемая специальность в MVP — см. README)
    tags = Column(JSON, default=list)

    # Финансовая помощь — как вложенный aid{level,merit,note} на фронте
    aid_level = Column(String, default="Medium")   # "High" | "Medium" | "Low"
    aid_merit = Column(Boolean, default=False)
    aid_note = Column(String, default="")

    # Фото сознательно не хранится в БД (см. README, раздел "Фото вузов") —
    # это забота фронта/CDN, а не бэкенда.


class Swipe(Base):
    __tablename__ = "swipes"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    university_id = Column(Integer, ForeignKey("universities.id"))
    liked = Column(Boolean)  # True = like (свайп вправо), False = dislike (свайп влево)

    user = relationship("User", back_populates="swipes")
    university = relationship("University")
