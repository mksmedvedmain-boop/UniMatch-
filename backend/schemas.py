from typing import List, Optional, Literal
from pydantic import BaseModel, ConfigDict, Field, model_validator

# Держим в синхроне с TEST_RANGES во фронтенде (app.js) — теперь там 7 тестов:
# SAT/ACT/IELTS + TOEFL/DET (английский) + IB/EGE (академические).
TEST_RANGES = {
    "SAT":   {"min": 400, "max": 1600, "academic_min": 900, "academic_max": 1600},
    "ACT":   {"min": 1, "max": 36, "academic_min": 18, "academic_max": 36},
    "IELTS": {"min": 0, "max": 9, "academic_min": 5, "academic_max": 9},
    "TOEFL": {"min": 0, "max": 120, "academic_min": 60, "academic_max": 120},
    "DET":   {"min": 10, "max": 160, "academic_min": 90, "academic_max": 160},
    "IB":    {"min": 24, "max": 45, "academic_min": 24, "academic_max": 45},
    "EGE":   {"min": 100, "max": 310, "academic_min": 180, "academic_max": 300},
}


def camel(field: str) -> str:
    """snake_case -> camelCase, чтобы JSON один-в-один совпадал с profile.* на фронте."""
    head, *rest = field.split("_")
    return head + "".join(w.capitalize() for w in rest)


class CamelModel(BaseModel):
    """Базовая модель: Python-поля snake_case, JSON — camelCase (как в unimatch-demo.html)."""
    model_config = ConfigDict(alias_generator=camel, populate_by_name=True, from_attributes=True)


# ---------------------------------------------------------------- tests / academic profile
class TestEntry(CamelModel):
    taken: bool = False
    score: float = 0


class Tests(CamelModel):
    # Семь тестов, как во фронтенде: SAT/ACT/IELTS (были всегда) + TOEFL/DET
    # (английский) + IB/EGE (академические). Старые клиенты, которые шлют только
    # первые три, продолжают работать — остальные просто дефолтные.
    SAT: TestEntry = Field(default_factory=lambda: TestEntry(taken=True, score=1350))
    ACT: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=30))
    IELTS: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=7))
    TOEFL: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=95))
    DET: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=120))
    IB: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=36))
    EGE: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=250))

    @model_validator(mode="after")
    def clamp_scores(self):
        # Тихо обрезаем каждый score к допустимому диапазону своего теста — как
        # onboarding-слайдеры на фронте (min/max в TEST_RANGES выше). Раньше этот
        # validator висел на TestEntry как no-op (`return self` без клампа) —
        # TestEntry не знает, какому тесту (SAT/ACT/IELTS) он принадлежит, поэтому
        # клампить нужно здесь, на уровне Tests, где ключ уже известен.
        for key, r in TEST_RANGES.items():
            entry = getattr(self, key)
            entry.score = min(max(entry.score, r["min"]), r["max"])
        return self


# ---------------------------------------------------------------- profile (== state.profile)
class Profile(CamelModel):
    """state.profile фронтенда. size/setting/climate теперь мульти-выбор
    (массивы, как на онбординге), а не одиночная строка — старая схема падала
    422 на текущем фронтенде. Внутри БД может лежать и старая строка —
    _list_from_db в main.py приводит её к массиву из одного элемента."""
    gpa: float = 3.6
    tests: Tests = Field(default_factory=Tests)
    major: str = "Computer Science"
    degree_level: Literal["bachelor", "master", "phd"] = "bachelor"
    size: List[str] = []
    setting: List[str] = []
    climate: List[str] = []
    research: int = 3
    budget: int = 40000
    needs_aid: Optional[bool] = None
    continents: List[str] = []
    countries: List[str] = []
    home_country: str = ""   # -> homeCountry: domestic/international логика aid
    native_lang: str = ""   # -> nativeLang


# ---------------------------------------------------------------- users / guest sessions
class UserCreate(CamelModel):
    """
    Payload онбординга. guest_id опционален: если передан и уже есть в БД — это апдейт
    того же гостя (например, он прошёл онбординг заново), а не создание нового user.
    Форма один-в-один повторяет то, что unimatch-demo.html сейчас пишет в localStorage
    под ключом unimatch_guest_v1 — чтобы миграция с localStorage на реальный бэкенд
    свелась к замене loadGuestSession/saveGuestSession на fetch к этим эндпоинтам.
    """
    guest_id: Optional[str] = None
    lang: str = "ru"
    profile: Profile = Field(default_factory=Profile)


class UserOut(CamelModel):
    id: int  # внутренний числовой PK — именно его фронт использует в /users/{id}/... путях;
             # guest_id (строка) остаётся только для сопоставления с localStorage
    guest_id: Optional[str] = None
    is_registered: bool
    email: Optional[str] = None
    lang: str
    profile: Profile
    # Выдаётся только /auth/register и /auth/login: непрозрачный токен серверной
    # сессии. У остальных ручек всегда None. В БД не хранится в открытом виде
    # вместе с UserOut — хранится в auth_sessions.
    session_token: Optional[str] = None


class RegisterEmail(CamelModel):
    """«Мягкая» регистрация: гость оставляет email, чтобы не потерять список Matches."""
    email: str


class AuthRegister(CamelModel):
    """
    Настоящая регистрация (POST /auth/register). Фронт (submitAuthForm) шлёт
    {email, password, lang, guestId}: guestId — текущая гостевая сессия, чтобы
    «усыновить» её (профиль и свайпы остаются, email+пароль привязываются к тому же
    user). Ответ — тот же UserOut, что и /users.
    """
    email: str
    password: str
    lang: str = "ru"
    guest_id: Optional[str] = None


class AuthLogin(CamelModel):
    """POST /auth/login: {email, password} -> UserOut (тот же контракт, что /users)."""
    email: str
    password: str


# ---------------------------------------------------------------- universities
class AidInfo(CamelModel):
    level: str        # "High" | "Medium" | "Low"
    merit: bool
    note: str


class UniversityOut(CamelModel):
    id: int
    name: str
    city: str
    country: str
    continent: str
    cost: int
    acceptance: float
    gpa25: float
    gpa75: float
    sat25: int
    sat75: int
    size: str
    setting: str
    climate: str
    research: int
    cs: int
    tags: List[str]
    aid: AidInfo


class UniversityMatchOut(UniversityOut):
    match_score: int          # -> matchScore, как _match в buildDeck()
    admission_reality: str    # -> admissionReality, "Reach" | "Target" | "Likely"


class BreakdownRow(CamelModel):
    code: str    # "cs_fit" | "location_fit" | "cost_fit" | "research_fit" | "aid_fit"
    value: int   # 0-100


class WhyReason(CamelModel):
    code: str
    params: dict = {}


class WhyOut(CamelModel):
    """
    Структурированные причины вместо готового текста на одном языке (см. README,
    пункт про локализацию "Why this university"): фронт сам переводит code по
    словарю STRINGS[lang], используя params для подстановки чисел/значений.
    """
    reasons: List[WhyReason]
    breakdown: List[BreakdownRow]


# ---------------------------------------------------------------- swipes
class SwipeCreate(CamelModel):
    university_id: int
    liked: bool


# ---------------------------------------------------------------- University DNA
class DNAOut(CamelModel):
    cs: int
    coastal: int
    research: int
    urban: int
    cost_sensitive: int
    warm: int
    based_on_swipes: int
