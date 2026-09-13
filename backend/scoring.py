"""
Match Score / Admission Reality / "Why this university" — портированы 1:1 из
unimatch-demo.html (функции academicStrength, matchScore, admissionReality,
buildWhyReasons, matchBreakdown в блоке <script>). Любое изменение формулы
должно вноситься в обоих местах одновременно, пока фронт не переехал на вызовы
этого бэкенда вместо локального пересчёта.

Как и раньше, модуль не импортирует SQLAlchemy/FastAPI напрямую (только для
type-checker'а) — это чистые функции над объектами с нужными полями (duck
typing), поэтому их можно тестировать без БД — см. test_scoring.py.
"""
from __future__ import annotations
from typing import TYPE_CHECKING, Optional

if TYPE_CHECKING:
    from models import University
    from schemas import Profile


TEST_RANGES = {
    "SAT":   {"academic_min": 900, "academic_max": 1600},
    "ACT":   {"academic_min": 18,  "academic_max": 36},
    "IELTS": {"academic_min": 5,   "academic_max": 9},
}


def academic_strength(p: Profile) -> int:
    """0-100. IELTS сознательно исключён — это тест на английский, а не на
    академическую силу профиля (см. комментарий в JS-версии)."""
    gpa_score = min(max((p.gpa - 2.0) / 2.0, 0), 1) * 100
    academic_keys = [k for k in ("SAT", "ACT") if getattr(p.tests, k).taken]
    if not academic_keys:
        return round(gpa_score)
    total = 0.0
    for k in academic_keys:
        r = TEST_RANGES[k]
        score = getattr(p.tests, k).score
        norm = min(max((score - r["academic_min"]) / (r["academic_max"] - r["academic_min"]), 0), 1) * 100
        total += norm
    avg_test_score = total / len(academic_keys)
    return round(gpa_score * 0.5 + avg_test_score * 0.5)


def english_proficiency_level(p: Profile) -> Optional[str]:
    """Отдельная от academic_strength оценка английского — только по IELTS."""
    if not p.tests.IELTS.taken:
        return None
    score = p.tests.IELTS.score
    if score >= 7.5:
        return "strong"
    if score >= 6.5:
        return "good"
    return "low"


# Базовые веса категорий. Сумма = 100%, как и раньше.
_BASE_WEIGHTS = {"cs": 28, "loc": 18, "cost": 18, "research": 14, "size": 12, "aid": 10}
# Категории, у которых сигнал есть ВСЕГДА, вне зависимости от того, прошёл ли
# пользователь онбординг до конца: cs — свойство вуза, budget/research у профиля
# имеют дефолт (40000 / 3), а не "не указано". Их вес и получает освободившийся
# вес непройденных шагов онбординга — см. комментарий ниже.
_ALWAYS_KNOWN = ("cs", "cost", "research")


def _effective_weights(p: Profile) -> dict[str, float]:
    """
    ИСПРАВЛЕНИЕ (было): раньше пустые setting/climate/size/needs_aid превращались
    в фиксированные "нейтральные" коэффициенты (0.6 / 0.7 / 0.7), которые
    прибавлялись ко ВСЕМ вузам ОДИНАКОВО — то есть 18+12+10 = 40% итогового веса
    переставали хоть как-то различать вузы. Для гостя, не прошедшего онбординг
    до конца (или ещё не задавшего фильтры на Discover), из-за этого Match Score
    у топового и у слабого вуза отличался буквально на несколько пунктов —
    именно это и было визуально "формула выдаёт почти одинаковый процент везде".

    Теперь: если категория не заполнена, её вес НЕ подставляется константой,
    а перераспределяется на категории, у которых сигнал есть всегда (cs/cost/
    research), пропорционально их базовым весам. Сумма весов всегда остаётся
    100%, а сам Match Score честно опирается только на то, что мы действительно
    знаем о пользователе — вместо того, чтобы делать вид, что "не указано" даёт
    какую-то конкретную информацию.
    """
    weights = dict(_BASE_WEIGHTS)
    pool = 0
    if not (p.setting or p.climate):
        pool += weights.pop("loc")
    if not p.size:
        pool += weights.pop("size")
    if p.needs_aid is not True:
        pool += weights.pop("aid")
    if pool:
        known_total = sum(_BASE_WEIGHTS[k] for k in _ALWAYS_KNOWN)
        for k in _ALWAYS_KNOWN:
            weights[k] += pool * (_BASE_WEIGHTS[k] / known_total)
    return weights


def match_score(u: University, p: Profile) -> int:
    w = _effective_weights(p)
    score = 0.0

    # CS fit
    score += (u.cs / 100) * w["cs"]

    # Cost fit
    cost_ratio = (u.cost / p.budget) if p.budget else 1
    cost_fit = 1.0 if cost_ratio <= 1 else max(0.0, 1 - (cost_ratio - 1) * 0.8)
    score += cost_fit * w["cost"]

    # Research fit
    research_fit = max(0.0, 1 - abs(u.research - p.research) / 5)
    score += research_fit * w["research"]

    # Location fit (setting + climate) — только если пользователь что-то из этого
    # указал. setting/climate — списки (мульти-select): совпадение засчитывается,
    # если университетское значение входит в выбранный набор.
    if "loc" in w:
        loc_fit = 0.0
        if p.setting and u.setting in p.setting:
            loc_fit += 0.55
        if p.climate and u.climate in p.climate:
            loc_fit += 0.45
        score += loc_fit * w["loc"]

    # Size fit — список (мульти-select): совпадение, если университетский размер
    # входит в выбранный набор. Участвует, только если список не пуст.
    if "size" in w:
        size_fit = 1.0 if u.size in p.size else 0.4
        score += size_fit * w["size"]

    # Financial aid fit — только если студент явно отметил, что помощь важна.
    if "aid" in w:
        aid_fit = {"High": 1.0, "Medium": 0.6, "Low": 0.25}.get(u.aid_level, 0.5)
        score += aid_fit * w["aid"]

    return int(min(99, max(40, round(score))))


def _to_sat_equivalent(test_key: str, score: float) -> float:
    """Нормализует ACT (или сам SAT) на шкалу SAT 900-1600, той же min/max
    нормализацией, что и academic_strength — 30 ACT и ~1400 SAT эквивалентны
    везде в приложении, а не только здесь."""
    r = TEST_RANGES[test_key]
    norm = min(max((score - r["academic_min"]) / (r["academic_max"] - r["academic_min"]), 0), 1)
    return 900 + norm * 700


def admission_reality(u: University, p: Profile) -> str:
    """
    Common Data Set подход: сравниваем профиль абитуриента со средними 50%
    (25-й/75-й перцентиль GPA/SAT) поступившего класса конкретного вуза —
    а не с общим acceptance rate. gpa25/gpa75/sat25/sat75 в seed_data.py —
    иллюстративные значения для демо, а не реальные цифры из CDS filing.
    """
    rank = {"below": 0, "within": 1, "above": 2}
    gpa_pos = "below" if p.gpa < u.gpa25 else ("above" if p.gpa > u.gpa75 else "within")

    academic_keys = [k for k in ("SAT", "ACT") if getattr(p.tests, k).taken]
    test_pos = None
    if academic_keys:
        # Если сдан и SAT, и ACT — берём тот, что выглядит выгоднее (как студент
        # подал бы в приёмную комиссию свой лучший результат).
        best = 0
        for k in academic_keys:
            sat_eq = _to_sat_equivalent(k, getattr(p.tests, k).score)
            pos = "below" if sat_eq < u.sat25 else ("above" if sat_eq > u.sat75 else "within")
            best = max(best, rank[pos])
        test_pos = best

    # Итоговая позиция — БОЛЕЕ СЛАБЫЙ из двух сигналов: 4.0 GPA не делает вуз
    # "Likely", если тестовый балл заметно ниже среднего диапазона поступивших.
    overall = min(rank[gpa_pos], test_pos) if test_pos is not None else rank[gpa_pos]

    if overall == rank["below"]:
        return "Reach"
    if overall == rank["within"]:
        return "Target"
    # overall == "above" по всем доступным сигналам — но это не гарантирует Likely
    # в очень селективных вузах (holistic review отклоняет и отличников).
    if u.acceptance < 0.15:
        return "Target"
    return "Likely"


def match_breakdown(u: University, p: Profile) -> list[dict]:
    """Разбивка Match Score по категориям для UI (радар/бар-чарт на карточке вуза)."""
    if not p.setting and not p.climate:
        loc_fit = 60
    else:
        loc_fit = (55 if p.setting and u.setting in p.setting else 0) + \
                  (45 if p.climate and u.climate in p.climate else 0)
    loc_fit = min(100, loc_fit)

    cost_ratio = (u.cost / p.budget) if p.budget else 1
    cost_fit = round((1 if cost_ratio <= 1 else max(0.0, 1 - (cost_ratio - 1) * 0.8)) * 100)
    research_fit = round(max(0.0, 1 - abs(u.research - p.research) / 5) * 100)

    rows = [
        {"code": "cs_fit", "value": u.cs},
        {"code": "location_fit", "value": loc_fit},
        {"code": "cost_fit", "value": cost_fit},
        {"code": "research_fit", "value": research_fit},
    ]
    if p.needs_aid is True:
        aid_fit = round({"High": 1.0, "Medium": 0.6, "Low": 0.25}.get(u.aid_level, 0.5) * 100)
        rows.append({"code": "aid_fit", "value": aid_fit})
    return rows


def why_this_university(u: University, p: Profile) -> list[dict]:
    """
    Структурированные причины (code + params) вместо готового текста на одном
    языке — фронт переводит code по словарю STRINGS[lang] (см. README, раздел
    про локализацию). Ключи code совпадают с ключами t('why_...') в JS-версии.
    """
    reasons = []
    if u.cs >= 90:
        reasons.append({"code": "why_cs", "params": {"value": u.cs}})
    if p.setting and u.setting in p.setting:
        reasons.append({"code": "why_setting", "params": {"value": u.setting}})
    if p.climate and u.climate in p.climate:
        reasons.append({"code": "why_climate", "params": {"value": u.climate}})
    if u.research >= 4:
        reasons.append({"code": "why_research", "params": {"value": u.research}})
    if u.cost <= p.budget:
        reasons.append({"code": "why_cost", "params": {}})
    if p.needs_aid is True and (u.aid_level == "High" or u.aid_merit):
        reasons.append({"code": "why_aid", "params": {"note": u.aid_note}})
    if len(reasons) < 3:
        reasons.append({"code": "why_generic", "params": {}})
    return reasons[:5]
