"""
Подключение к БД. Для локальной разработки — SQLite (не требует установки сервера).
Для продакшена достаточно заменить SQLALCHEMY_DATABASE_URL на строку PostgreSQL —
остальной код (models.py, main.py) трогать не нужно, т.к. вся работа идёт через ORM.
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./unimatch.db"
# Продакшен-пример:
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost/unimatch"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},  # нужно только для SQLite
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    """Dependency для FastAPI: открывает сессию на время запроса и закрывает её после."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
