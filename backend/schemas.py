from typing import List, Optional, Literal
from pydantic import BaseModel, ConfigDict, Field, model_validator

# Держим в синхроне с TEST_RANGES в unimatch-demo.html.
TEST_RANGES = {
    "SAT": {"min": 400, "max": 1600, "academic_min": 900, "academic_max": 1600},
    "ACT": {"min": 1, "max": 36, "academic_min": 18, "academic_max": 36},
    "IELTS": {"min": 0, "max": 9, "academic_min": 5, "academic_max": 9},
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
    SAT: TestEntry = Field(default_factory=lambda: TestEntry(taken=True, score=1350))
    ACT: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=30))
    IELTS: TestEntry = Field(default_factory=lambda: TestEntry(taken=False, score=7))

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
    gpa: float = 3.6
    tests: Tests = Field(default_factory=Tests)
    major: str = "Computer Science"
    degree_level: Literal["bachelor", "master", "phd"] = "bachelor"
    size: Optional[str] = None
    setting: Optional[str] = None
    climate: Optional[str] = None
    research: int = 3
    budget: int = 40000
    needs_aid: Optional[bool] = None
    continents: List[str] = []
    countries: List[str] = []


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


class RegisterEmail(CamelModel):
    """«Мягкая» регистрация: гость оставляет email, чтобы не потерять список Matches."""
    email: str


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
