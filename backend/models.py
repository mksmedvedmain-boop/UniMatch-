from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, JSON
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    # Гостевая сессия: guest_token генерируется на фронтенде (или сервером, если его нет)
    # и хранится в localStorage браузера — так пользователь не должен регистрироваться,
    # чтобы его свайпы и профиль уже писались в БД.
    guest_token = Column(String, unique=True, index=True, nullable=True)
    is_guest = Column(Boolean, default=True)
    email = Column(String, unique=True, nullable=True)  # заполняется, когда гость решает "сохранить" список

    # Академический профиль
    gpa = Column(Float, default=3.5)
    test_type = Column(String, default="SAT")       # "SAT" | "ACT" | "IELTS" (IELTS — для поступающих из-за рубежа)
    test_score = Column(Float, default=1300)
    major = Column(String, default="Computer Science")

    # Предпочтения (заполняются в онбординге, потом уточняются свайпами)
    size_pref = Column(String, nullable=True)        # "Small" | "Medium" | "Large"
    setting_pref = Column(String, nullable=True)     # "Urban" | "Suburban" | "Coastal"
    climate_pref = Column(String, nullable=True)     # "Warm" | "Moderate" | "Cold"
    research_importance = Column(Integer, default=3) # 1-5
    budget = Column(Integer, default=40000)          # $/год

    # Выбранные регионы — храним как JSON-списки строк, чтобы не плодить M2M таблицы в MVP
    continents = Column(JSON, default=list)          # e.g. ["na", "eu"]
    countries = Column(JSON, default=list)           # e.g. ["USA", "Canada"]

    swipes = relationship("Swipe", back_populates="user")


class University(Base):
    __tablename__ = "universities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    city = Column(String)
    country = Column(String, index=True)
    continent = Column(String, index=True)  # "na" | "sa" | "eu" | "af" | "as" | "oc"

    cost = Column(Integer)            # $/год без учёта financial aid
    acceptance_rate = Column(Float)   # 0.0 - 1.0
    size = Column(String)             # "Small" | "Medium" | "Large"
    setting = Column(String)          # "Urban" | "Suburban" | "Coastal"
    climate = Column(String)          # "Warm" | "Moderate" | "Cold"
    research_level = Column(Integer)  # 1-5
    cs_strength = Column(Integer)     # 0-100, условный индекс силы CS-программы
    tags = Column(JSON, default=list)


class Swipe(Base):
    __tablename__ = "swipes"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    university_id = Column(Integer, ForeignKey("universities.id"))
    liked = Column(Boolean)  # True = like (right swipe), False = dislike (left swipe)

    user = relationship("User", back_populates="swipes")
    university = relationship("University")
