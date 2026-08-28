from typing import List, Optional
from pydantic import BaseModel, model_validator

# Держим в синхроне с TEST_RANGES во фронтенд-демо: SAT нельзя вводить больше 1600 и т.д.
TEST_RANGES = {
    "SAT": (400, 1600),
    "ACT": (1, 36),
    "IELTS": (0, 9),
}


class UserCreate(BaseModel):
    guest_token: Optional[str] = None  # если передан и уже существует в БД — это апдейт того же гостя, а не новый юзер
    gpa: float = 3.5
    test_type: str = "SAT"  # "SAT" | "ACT" | "IELTS"
    test_score: float = 1300
    major: str = "Computer Science"
    size_pref: Optional[str] = None
    setting_pref: Optional[str] = None
    climate_pref: Optional[str] = None
    research_importance: int = 3
    budget: int = 40000
    continents: List[str] = []
    countries: List[str] = []

    @model_validator(mode="after")
    def clamp_test_score(self):
        """SAT не может быть, например, 2000 — так же как во фронтенд-демо, тихо обрезаем до допустимого диапазона."""
        lo, hi = TEST_RANGES.get(self.test_type, (0, 9999))
        self.test_score = min(max(self.test_score, lo), hi)
        return self


class UserOut(BaseModel):
    id: int
    guest_token: Optional[str] = None
    is_guest: bool
    email: Optional[str] = None
    gpa: float
    test_type: str
    test_score: float
    major: str
    size_pref: Optional[str] = None
    setting_pref: Optional[str] = None
    climate_pref: Optional[str] = None
    research_importance: int
    budget: int
    continents: List[str] = []
    countries: List[str] = []
    class Config:
        from_attributes = True


class RegisterEmail(BaseModel):
    """Апгрейд гостя до аккаунта с email — без пароля, чтобы не отпугивать формой регистрации."""
    email: str


class UniversityOut(BaseModel):
    id: int
    name: str
    city: str
    country: str
    continent: str
    cost: int
    acceptance_rate: float
    size: str
    setting: str
    climate: str
    research_level: int
    cs_strength: int
    tags: List[str]
    class Config:
        from_attributes = True


class UniversityMatchOut(UniversityOut):
    match_score: int
    admission_reality: str  # "Reach" | "Target" | "Likely"


class SwipeCreate(BaseModel):
    university_id: int
    liked: bool


class DNAOut(BaseModel):
    cs_focused: int
    coastal: int
    research_oriented: int
    urban: int
    cost_sensitive: int
    warm_climate: int
    based_on_swipes: int
