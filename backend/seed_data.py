"""
Заполняет БД тем же набором из ~24 университетов, что используется в demo-фронтенде,
чтобы можно было сразу проверить API с реалистичными данными.
Запуск: python seed_data.py
"""
from database import Base, engine, SessionLocal
import models

UNIVERSITIES = [
    dict(name="MIT", city="Cambridge", country="USA", continent="na", cost=57900, acceptance_rate=0.04, size="Medium", setting="Urban", climate="Cold", research_level=5, cs_strength=98, tags=["Elite CS", "Research Powerhouse", "Urban"]),
    dict(name="UC San Diego", city="San Diego", country="USA", continent="na", cost=34000, acceptance_rate=0.24, size="Large", setting="Coastal", climate="Warm", research_level=4, cs_strength=96, tags=["Strong CS", "Near Ocean", "Large"]),
    dict(name="University of Miami", city="Miami", country="USA", continent="na", cost=29000, acceptance_rate=0.19, size="Medium", setting="Coastal", climate="Warm", research_level=3, cs_strength=80, tags=["Coastal", "Diverse", "Private"]),
    dict(name="USC", city="Los Angeles", country="USA", continent="na", cost=64000, acceptance_rate=0.10, size="Large", setting="Urban", climate="Warm", research_level=4, cs_strength=90, tags=["Strong CS", "Urban", "Alumni Network"]),
    dict(name="Georgia Tech", city="Atlanta", country="USA", continent="na", cost=33000, acceptance_rate=0.16, size="Large", setting="Urban", climate="Warm", research_level=5, cs_strength=95, tags=["Top CS", "Research", "Public"]),
    dict(name="Arizona State University", city="Tempe", country="USA", continent="na", cost=29000, acceptance_rate=0.88, size="Large", setting="Suburban", climate="Warm", research_level=3, cs_strength=75, tags=["Accessible", "Large", "Innovation"]),
    dict(name="University of Michigan", city="Ann Arbor", country="USA", continent="na", cost=53000, acceptance_rate=0.18, size="Large", setting="Suburban", climate="Cold", research_level=5, cs_strength=93, tags=["Top CS", "Research", "Big Campus"]),
    dict(name="Carnegie Mellon", city="Pittsburgh", country="USA", continent="na", cost=60000, acceptance_rate=0.11, size="Medium", setting="Urban", climate="Cold", research_level=5, cs_strength=99, tags=["Elite CS", "Research Powerhouse"]),
    dict(name="University of Toronto", city="Toronto", country="Canada", continent="na", cost=45000, acceptance_rate=0.43, size="Large", setting="Urban", climate="Cold", research_level=5, cs_strength=92, tags=["Top CS", "Urban", "International"]),
    dict(name="University of Waterloo", city="Waterloo", country="Canada", continent="na", cost=40000, acceptance_rate=0.53, size="Medium", setting="Suburban", climate="Cold", research_level=4, cs_strength=94, tags=["Co-op Program", "Strong CS"]),
    dict(name="University of British Columbia", city="Vancouver", country="Canada", continent="na", cost=38000, acceptance_rate=0.52, size="Large", setting="Coastal", climate="Moderate", research_level=4, cs_strength=87, tags=["Near Ocean", "Scenic", "Research"]),
    dict(name="University of Edinburgh", city="Edinburgh", country="UK", continent="eu", cost=34000, acceptance_rate=0.40, size="Large", setting="Urban", climate="Cold", research_level=4, cs_strength=85, tags=["Historic", "Urban", "Research"]),
    dict(name="Imperial College London", city="London", country="UK", continent="eu", cost=45000, acceptance_rate=0.15, size="Medium", setting="Urban", climate="Moderate", research_level=5, cs_strength=96, tags=["Elite CS", "Urban", "STEM Focus"]),
    dict(name="TU Munich", city="Munich", country="Germany", continent="eu", cost=3000, acceptance_rate=0.35, size="Large", setting="Urban", climate="Cold", research_level=5, cs_strength=91, tags=["Low Cost", "Research", "Public"]),
    dict(name="TU Delft", city="Delft", country="Netherlands", continent="eu", cost=16000, acceptance_rate=0.45, size="Medium", setting="Suburban", climate="Moderate", research_level=5, cs_strength=89, tags=["Engineering Focus", "Affordable"]),
    dict(name="ETH Zurich", city="Zurich", country="Switzerland", continent="eu", cost=1500, acceptance_rate=0.27, size="Medium", setting="Urban", climate="Cold", research_level=5, cs_strength=97, tags=["Elite CS", "Low Cost", "Research"]),
    dict(name="NUS", city="Singapore", country="Singapore", continent="as", cost=28000, acceptance_rate=0.20, size="Large", setting="Urban", climate="Warm", research_level=5, cs_strength=94, tags=["Top CS", "Urban", "Asia Hub"]),
    dict(name="NTU Singapore", city="Singapore", country="Singapore", continent="as", cost=26000, acceptance_rate=0.25, size="Large", setting="Suburban", climate="Warm", research_level=4, cs_strength=90, tags=["Strong CS", "Green Campus"]),
    dict(name="University of Tokyo", city="Tokyo", country="Japan", continent="as", cost=6000, acceptance_rate=0.34, size="Large", setting="Urban", climate="Moderate", research_level=5, cs_strength=88, tags=["Prestigious", "Low Cost", "Urban"]),
    dict(name="KAIST", city="Daejeon", country="South Korea", continent="as", cost=5000, acceptance_rate=0.15, size="Medium", setting="Suburban", climate="Cold", research_level=5, cs_strength=93, tags=["Tech Focus", "Research", "Low Cost"]),
    dict(name="HKUST", city="Hong Kong", country="Hong Kong", continent="as", cost=19000, acceptance_rate=0.13, size="Medium", setting="Coastal", climate="Warm", research_level=5, cs_strength=92, tags=["Near Ocean", "Elite CS"]),
    dict(name="University of Melbourne", city="Melbourne", country="Australia", continent="oc", cost=35000, acceptance_rate=0.70, size="Large", setting="Urban", climate="Moderate", research_level=4, cs_strength=86, tags=["Urban", "Research", "Livable City"]),
    dict(name="University of Sydney", city="Sydney", country="Australia", continent="oc", cost=38000, acceptance_rate=0.65, size="Large", setting="Coastal", climate="Warm", research_level=4, cs_strength=83, tags=["Near Ocean", "Urban"]),
    dict(name="Australian National University", city="Canberra", country="Australia", continent="oc", cost=33000, acceptance_rate=0.35, size="Medium", setting="Suburban", climate="Moderate", research_level=5, cs_strength=85, tags=["Research", "Small & Focused"]),
]

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    if db.query(models.University).count() == 0:
        db.bulk_insert_mappings(models.University, UNIVERSITIES)
        db.commit()
        print(f"Seeded {len(UNIVERSITIES)} universities.")
    else:
        print("Universities table already has data — skipping seed.")
    db.close()
