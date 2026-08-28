# UniMatch — примерный backend (FastAPI)

Это не готовый продакшн-бэкенд, а рабочий **скелет**, который показывает архитектуру
из плана проекта: модели данных, эндпоинты, простую формулу Match Score и
Admission Reality — ровно то же самое, что сейчас симулируется на фронтенде в demo.

## Структура

```
unimatch-backend/
├── main.py           # FastAPI приложение и роуты
├── database.py        # подключение к БД (SQLite для локальной разработки)
├── models.py          # SQLAlchemy модели: User, University, Swipe
├── schemas.py         # Pydantic-схемы запросов/ответов
├── scoring.py          # Match Score + Admission Reality (та же логика, что во фронтенде)
├── seed_data.py       # заполняет БД стартовым набором университетов
└── requirements.txt
```

## Как проверить логику без установки зависимостей

`scoring.py` специально не тянет за собой FastAPI/SQLAlchemy при импорте — это
чистые функции. Их можно проверить прямо сейчас, без `pip install`:

```bash
python3 test_scoring.py
```

Тесты гоняют Match Score / Admission Reality на нескольких сценариях (сильный/слабый
академический профиль, вуз в бюджете/вне бюджета, matching/non-matching preferences)
и проверяют, что цифры логически согласованы (например: вуз с 88% acceptance rate
всегда попадает в Likely, а MIT для слабого профиля — всегда Reach).

## Как запустить локально

```bash
pip install -r requirements.txt
python seed_data.py          # один раз — создаёт unimatch.db и заливает университеты
uvicorn main:app --reload    # http://127.0.0.1:8000/docs — интерактивная документация
```

## Что реализовано (скелет)

- `POST /users` — создать пользователя (онбординг: GPA, тест, предпочтения, регионы)
- `GET /universities` — список университетов с фильтром по continent/country
- `POST /users/{user_id}/swipes` — записать свайп (like/dislike)
- `GET /users/{user_id}/matches` — список лайкнутых университетов с Match Score и Admission Reality
- `GET /users/{user_id}/dna` — агрегированный "University DNA" по лайкнутым вузам
- `GET /universities/{id}/why` — причины рекомендации ("Why this university?")

## Что сознательно не реализовано (по плану — фаза 2)

- Настоящий recommendation engine (cosine similarity / KNN / clustering) —
  сейчас `scoring.py` содержит только baseline weighted scoring, как и должно
  быть в MVP согласно плану.
- Аутентификация — в реальном проекте здесь должен быть JWT/OAuth.
- Данные из College Scorecard API — сейчас университеты заводятся вручную через `seed_data.py`.

## Как перейти к боевому FastAPI + PostgreSQL

Замените в `database.py` строку подключения SQLite на PostgreSQL
(`postgresql://user:password@host/dbname`) и добавьте Alembic для миграций —
остальной код не изменится, т.к. вся работа с БД идёт через SQLAlchemy ORM.
