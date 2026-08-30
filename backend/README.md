# UniMatch — backend (FastAPI), синхронизирован с app.js

Этот бэкенд соответствует текущей версии фронтенда (`index.html` + `app.js`),
который до недавнего времени работал полностью локально: онбординг, свайпы и
весь скоринг (Match Score, Admission Reality, University DNA, "Why this
university") считались прямо в JS и сохранялись в `localStorage`. Теперь
`app.js` реально обращается к этому бэкенду через `fetch()` — см. README
фронтенда.

## Исправлено при интеграции с реальным app.js

- **`schemas.py`/`main.py`: у `UserOut` не было числового `id`.** Отдавался
  только `guestId` (строка-токен) — а `app.js` использует именно числовой
  `user_id` в путях вида `/users/{id}/swipes`, `/users/{id}/matches` и т.д.
  Без этого поля фронт физически не мог сделать ни одного запроса после
  создания пользователя. Добавил `id: int` в `UserOut` и `_user_out()`.
- **Добавлен `DELETE /users/{user_id}/swipes/{university_id}`.** На странице
  вуза есть кнопка "Save"/"In Matches", которая должна и добавлять, и убирать
  вуз из Matches. Раньше на бэке была только запись свайпа (`POST`), без
  возможности отменить.
- (Из прошлого ревью) `schemas.py`: клампинг `TestEntry.score` был no-op —
  перенёс на уровень `Tests`, где известно, какому тесту принадлежит `score`.
- (Из прошлого ревью) `models.py`: `default=lambda: dict(DEFAULT_TESTS)` —
  мелкая копия; заменил на `copy.deepcopy`.

## Что изменилось по сравнению с самой первой версией бэкенда

- **Профиль пользователя** — три независимых теста (`tests.SAT/ACT/IELTS`,
  каждый со своим `taken`/`score`), а не один `test_type`/`test_score`. Плюс
  `degreeLevel` (`bachelor`/`master`/`phd`) и `lang` (`ru`/`en`).
- **Admission Reality** — считается через сравнение GPA/SAT с реальным средним
  диапазоном поступивших (25-й/75-й перцентиль: `gpa25`, `gpa75`, `sat25`,
  `sat75` у каждого вуза), а не через "сила профиля vs общий acceptance rate".
- **API отдаёт camelCase**, как и объекты во фронтенде (`matchScore`,
  `admissionReality`, `degreeLevel`, `needsAid` и т.д.).
- **Форма `UserOut`/`UserCreate`** повторяет то, что раньше лежало в
  `localStorage.unimatch_guest_v1`: `{id, guestId, isRegistered, email, lang,
  profile: {...}}`.
- **Добавлен CORS** — `app.js` открывается с `127.0.0.1:5500` (Live Server и
  т.п.), без `CORSMiddleware` браузер молча блокирует все запросы к API.
- **Данные вузов** (`seed_data.py`) распарсены прямо из константы
  `UNIVERSITIES` во фронтенде, а не перепечатаны вручную.

## Решения по трём открытым вопросам (см. обсуждение)

1. **Majors** — вариант A: скоуп ограничен CS (`cs` — единственное поле силы
   программы). Фронт даёт выбрать любую специальность из `MAJOR_CATEGORIES`,
   но это осознанное ограничение MVP.
2. **Фото вузов** — не хранятся в БД. Фото MIT остаётся зашитым в
   `UNIVERSITIES` на фронте; `app.js` подмешивает его к ответу бэкенда по
   `id` (см. функцию `fromApiUni()`).
3. **Локализация "Why this university"** — вариант D в API готов
   (`/universities/{id}/why` отдаёт `{code, params}` + `breakdown`), но
   **на практике `app.js` пока продолжает считать Why/breakdown локально**
   (`buildWhyReasons`, `matchBreakdown`) — это чистые функции без побочных
   эффектов и без запроса к серверу они не нуждаются. Эндпоинт остаётся
   готовым к использованию, если позже понадобится, например, сохранять
   персонализированные объяснения.

## Что осталось не реализовано (сознательно, фаза 2)

- Настоящий recommendation engine (cosine similarity / KNN / clustering).
- Полноценная аутентификация — только "мягкая" регистрация по email.
- `degreeLevel` не участвует в фильтрации/скоринге — как и на фронте.
- Отдельного счётчика "passed" (дизлайков) на бэке нет — `app.js` считает
  его локально за текущую сессию (не переживает перезагрузку страницы).
  При желании можно добавить `GET /users/{id}/swipes?liked=false`.

## Структура

```
backend/
├── main.py          # FastAPI приложение и роуты (+ CORS)
├── database.py       # подключение к БД (SQLite для локальной разработки)
├── models.py         # SQLAlchemy модели: User, University, Swipe
├── schemas.py        # Pydantic-схемы, camelCase-алиасы под фронт
├── scoring.py         # Match Score / Admission Reality / Why — портированы из JS
├── seed_data.py       # 50 вузов, распарсенные из фронтенда
├── test_scoring.py    # 25 unit-проверок scoring.py, без внешних зависимостей
└── requirements.txt
```

## Как запустить

```bash
pip install -r requirements.txt
python seed_data.py          # создаёт unimatch.db и заливает 50 университетов
uvicorn main:app --reload    # http://127.0.0.1:8000/docs
```

Проверить только логику скоринга (без установки FastAPI/SQLAlchemy):
```bash
python3 test_scoring.py
```

Фронт (`app.js`) стучится на `http://127.0.0.1:8000` (константа `API_BASE`
в начале файла) — если запускаешь бэкенд на другом порту/хосте, поменяй эту
константу.

## API

- `POST /users` — создать/обновить гостевой профиль
- `POST /users/{id}/register` — оставить email ("мягкая" регистрация)
- `GET /users/{id}` — получить профиль
- `GET /universities?user_id=` — deck, отфильтрованный по `profile.continents/countries`
  пользователя, отсортированный по Match Score
- `GET /universities/{id}/why?user_id=` — причины + breakdown по категориям
  (эндпоинт готов, но `app.js` пока считает это локально — см. выше)
- `POST /users/{id}/swipes` — записать like/dislike
- `DELETE /users/{id}/swipes/{university_id}` — отменить свайп (кнопка "Save"
  на детальной странице вуза)
- `GET /users/{id}/matches` — лайкнутые вузы с Match Score / Admission Reality
- `GET /users/{id}/dna` — University DNA (эндпоинт готов, но `app.js` пока
  считает это локально из уже загруженного `state.liked` — см. выше)

## Как перейти на боевую БД

Замените строку подключения в `database.py` на PostgreSQL и добавьте Alembic —
остальной код не меняется, вся работа идёт через SQLAlchemy ORM.
