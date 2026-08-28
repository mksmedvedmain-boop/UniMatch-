"""
Baseline weighted scoring — MVP-версия Match Score и Admission Reality.
Ровно та же логика, что симулируется в demo-фронтенде, только на бэкенде,
чтобы фронт мог просто запрашивать готовые цифры вместо пересчёта на клиенте.

Специально не импортирует SQLAlchemy-модели напрямую (только для type-checker'а,
см. TYPE_CHECKING ниже) — это чистые функции над обычными объектами с нужными
полями (duck typing), поэтому их можно тестировать без БД и без FastAPI —
см. test_scoring.py, который проверяет этот файл вообще без внешних зависимостей.

Фаза 2 (по плану проекта): заменить / дополнить эту функцию сравнением
cosine similarity, KNN и clustering на реальных данных swipes, когда
накопится ~1000+ взаимодействий.
"""
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from models import University, User


TEST_ACADEMIC_RANGES = {
    "SAT":   (900, 1600),
    "ACT":   (18, 36),
    "IELTS": (5, 9),
}


def academic_strength(user: User) -> int:
    """Грубый индекс силы академического профиля, 0-100."""
    gpa_component = min(max((user.gpa - 2.0) / 2.0, 0), 1) * 100
    lo, hi = TEST_ACADEMIC_RANGES.get(user.test_type, (0, 1))
    test_component = min(max((user.test_score - lo) / (hi - lo), 0), 1) * 100
    return round(gpa_component * 0.5 + test_component * 0.5)


def match_score(uni: University, user: User) -> int:
    score = 0.0

    # CS fit — 30%
    score += (uni.cs_strength / 100) * 30

    # Location/climate fit — 20%
    if not user.setting_pref and not user.climate_pref:
        loc_fit = 0.6
    else:
        loc_fit = 0.0
        if user.setting_pref and uni.setting == user.setting_pref:
            loc_fit += 0.55
        if user.climate_pref and uni.climate == user.climate_pref:
            loc_fit += 0.45
    score += loc_fit * 20

    # Cost fit — 20%
    cost_ratio = (uni.cost / user.budget) if user.budget else 1
    cost_fit = 1.0 if cost_ratio <= 1 else max(0.0, 1 - (cost_ratio - 1) * 0.8)
    score += cost_fit * 20

    # Research fit — 15%
    research_fit = max(0.0, 1 - abs(uni.research_level - user.research_importance) / 5)
    score += research_fit * 15

    # Size fit — 15%
    size_fit = 1.0 if (user.size_pref and uni.size == user.size_pref) else (0.7 if not user.size_pref else 0.4)
    score += size_fit * 15

    # Веса выше (30+20+20+15+15) суммируются ровно в 100 — без произвольного
    # "случайного" слагаемого для красоты чисел, которое раньше здесь было
    # (см. CHANGELOG.md) и могло менять порядок вузов без реальной причины.
    return int(min(99, max(40, round(score))))


def admission_reality(uni: University, user: User) -> str:
    strength = academic_strength(user)
    difficulty = 100 - uni.acceptance_rate * 100
    gap = difficulty - strength
    if gap > 25:
        return "Reach"
    if gap > -10:
        return "Target"
    return "Likely"


def why_this_university(uni: University, user: User) -> list[str]:
    reasons = []
    if uni.cs_strength >= 90:
        reasons.append(f"Один из сильнейших CS-факультетов в подборке ({uni.cs_strength}/100)")
    if user.setting_pref and uni.setting == user.setting_pref:
        reasons.append(f"Совпадает с предпочтением по типу кампуса: {uni.setting}")
    if user.climate_pref and uni.climate == user.climate_pref:
        reasons.append(f"Климат ({uni.climate}) соответствует предпочтениям")
    if uni.research_level >= 4:
        reasons.append(f"Высокий уровень research opportunities ({uni.research_level}/5)")
    if uni.cost <= user.budget:
        reasons.append("Стоимость обучения укладывается в бюджет")
    if len(reasons) < 3:
        reasons.append("Похож по профилю на другие университеты из вашего списка Matches")
    return reasons[:5]
