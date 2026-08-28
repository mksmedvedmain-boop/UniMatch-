"""
Проверка scoring.py БЕЗ FastAPI/SQLAlchemy — специально написано так, чтобы можно было
запустить прямо сейчас, до того как получится поставить полный набор зависимостей
и реально поднять сервер.

Запуск:  python3 test_scoring.py
Если сеть/пакеты уже доступны — после `pip install -r requirements.txt` этот файл
всё равно работает как есть, он не зависит от того, установлен FastAPI или нет.
"""
from dataclasses import dataclass, field
from typing import List, Optional

import scoring


@dataclass
class FakeUser:
    gpa: float = 3.5
    test_type: str = "SAT"
    test_score: float = 1300
    size_pref: Optional[str] = None
    setting_pref: Optional[str] = None
    climate_pref: Optional[str] = None
    research_importance: int = 3
    budget: int = 40000
    needs_aid: Optional[bool] = None


@dataclass
class FakeUni:
    id: int
    cs_strength: int
    acceptance_rate: float
    setting: str
    climate: str
    cost: int
    research_level: int
    size: str = "Medium"
    aid_level: str = "Medium"
    aid_merit: bool = False
    aid_note: str = ""


results = []


def check(label, condition):
    results.append((label, condition))
    mark = "OK  " if condition else "FAIL"
    print(f"[{mark}] {label}")


# ---------------------------------------------------------------- academic_strength
print("\n=== academic_strength ===")

weak_sat = FakeUser(gpa=2.5, test_type="SAT", test_score=950)
strong_sat = FakeUser(gpa=4.0, test_type="SAT", test_score=1580)
mid_act = FakeUser(gpa=3.5, test_type="ACT", test_score=27)
strong_ielts = FakeUser(gpa=3.8, test_type="IELTS", test_score=8.5)

s_weak = scoring.academic_strength(weak_sat)
s_strong = scoring.academic_strength(strong_sat)
s_ielts = scoring.academic_strength(strong_ielts)

print(f"weak SAT profile   -> {s_weak}/100")
print(f"strong SAT profile -> {s_strong}/100")
print(f"strong IELTS profile -> {s_ielts}/100")

check("weak profile scores low (<30)", s_weak < 30)
check("strong SAT profile scores high (>90)", s_strong > 90)
check("strong profile beats weak profile", s_strong > s_weak)
check("IELTS 8.5 scores high too (>80), so the scale isn't SAT-biased", s_ielts > 80)

# score must never leave [0, 100] even with out-of-range garbage input
out_of_range = FakeUser(gpa=10, test_type="SAT", test_score=99999)
check("academic_strength is clamped to 100 even with bad input", scoring.academic_strength(out_of_range) == 100)

# ---------------------------------------------------------------- match_score
print("\n=== match_score ===")

user_coastal_warm = FakeUser(setting_pref="Coastal", climate_pref="Warm", budget=35000, research_importance=4)

mit = FakeUni(id=1, cs_strength=98, acceptance_rate=0.04, setting="Urban", climate="Cold", cost=57900, research_level=5)
ucsd = FakeUni(id=2, cs_strength=96, acceptance_rate=0.24, setting="Coastal", climate="Warm", cost=34000, research_level=4)
asu = FakeUni(id=6, cs_strength=75, acceptance_rate=0.88, setting="Suburban", climate="Warm", cost=29000, research_level=3)

m_mit = scoring.match_score(mit, user_coastal_warm)
m_ucsd = scoring.match_score(ucsd, user_coastal_warm)
m_asu = scoring.match_score(asu, user_coastal_warm)

print(f"MIT match for a Coastal/Warm/$35k user  -> {m_mit}%")
print(f"UCSD match for the same user            -> {m_ucsd}%  (Coastal+Warm+fits budget)")
print(f"ASU match for the same user             -> {m_asu}%")

check("all scores stay within [40, 99]", all(40 <= s <= 99 for s in (m_mit, m_ucsd, m_asu)))
check("UCSD (matches setting+climate+budget) beats MIT (matches none of those)", m_ucsd > m_mit)

# a university way over budget should score worse than an equally-strong one that fits
cheap_but_similar = FakeUni(id=99, cs_strength=96, acceptance_rate=0.24, setting="Coastal", climate="Warm", cost=20000, research_level=4)
m_cheap = scoring.match_score(cheap_but_similar, user_coastal_warm)
check("a cheaper university with the same profile scores >= the pricier one", m_cheap >= m_ucsd)

# no preferences at all should not crash and should return a sane mid-range score
neutral_user = FakeUser()
m_neutral = scoring.match_score(ucsd, neutral_user)
print(f"UCSD match for a user with no stated preferences -> {m_neutral}%")
check("neutral user (no prefs) still gets a valid score", 40 <= m_neutral <= 99)

# aid fit should only matter when the student explicitly said aid is important
generous_aid = FakeUni(id=100, cs_strength=90, acceptance_rate=0.20, setting="Urban", climate="Cold", cost=50000, research_level=4, aid_level="High")
stingy_aid = FakeUni(id=101, cs_strength=90, acceptance_rate=0.20, setting="Urban", climate="Cold", cost=50000, research_level=4, aid_level="Low")
user_wants_aid = FakeUser(needs_aid=True)
user_no_aid_pref = FakeUser(needs_aid=None)

m_generous_wants = scoring.match_score(generous_aid, user_wants_aid)
m_stingy_wants = scoring.match_score(stingy_aid, user_wants_aid)
m_generous_neutral = scoring.match_score(generous_aid, user_no_aid_pref)
m_stingy_neutral = scoring.match_score(stingy_aid, user_no_aid_pref)

print(f"Generous-aid school, student who needs aid  -> {m_generous_wants}%")
print(f"Stingy-aid school,   student who needs aid  -> {m_stingy_wants}%")
print(f"Generous-aid school, no aid preference       -> {m_generous_neutral}%")
print(f"Stingy-aid school,   no aid preference       -> {m_stingy_neutral}%")

check("when aid matters to the student, generous-aid school scores higher", m_generous_wants > m_stingy_wants)
check("when the student has no aid preference, aid level doesn't affect the score", m_generous_neutral == m_stingy_neutral)

# ---------------------------------------------------------------- admission_reality
print("\n=== admission_reality ===")

weak_student = FakeUser(gpa=2.8, test_type="SAT", test_score=1050)
strong_student = FakeUser(gpa=4.0, test_type="SAT", test_score=1580)

r1 = scoring.admission_reality(mit, weak_student)     # MIT + weak profile -> Reach
r2 = scoring.admission_reality(mit, strong_student)   # MIT + strong profile -> still Reach/Target (4% acceptance)
r3 = scoring.admission_reality(asu, weak_student)      # ASU (88% acceptance) -> Likely for almost anyone

print(f"MIT for a weak-profile student   -> {r1}")
print(f"MIT for a strong-profile student -> {r2}")
print(f"ASU (88% acceptance) for a weak-profile student -> {r3}")

check("MIT is Reach for a weak-profile student", r1 == "Reach")
check("ASU is Likely for a weak-profile student (88% acceptance rate)", r3 == "Likely")
check("admission_reality only ever returns one of the 3 valid labels",
      all(r in ("Reach", "Target", "Likely") for r in (r1, r2, r3)))

# ---------------------------------------------------------------- why_this_university
print("\n=== why_this_university ===")

reasons = scoring.why_this_university(ucsd, user_coastal_warm)
for r in reasons:
    print(" -", r)

check("why_this_university returns at least one reason", len(reasons) >= 1)
check("why_this_university returns at most 5 reasons", len(reasons) <= 5)
check("all reasons are non-empty strings", all(isinstance(r, str) and r.strip() for r in reasons))

# ---------------------------------------------------------------- summary
print("\n=== SUMMARY ===")
passed = sum(1 for _, ok in results if ok)
total = len(results)
print(f"{passed}/{total} checks passed")
if passed != total:
    print("FAILED CHECKS:")
    for label, ok in results:
        if not ok:
            print(" -", label)
    raise SystemExit(1)
