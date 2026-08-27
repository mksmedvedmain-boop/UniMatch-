# UniMatch

> A Tinder-style platform for finding universities based on your academic profile and personal preferences.

UniMatch is a university matching web app that helps students find universities that fit them personally, instead of relying only on rankings or simple search filters.

The idea is simple: create a profile, choose your preferences, and swipe through universities. The app calculates how well each university matches your preferences and also shows how realistic admission might be.

## What it does

### Onboarding

The user starts by creating a profile with information such as:

- GPA
- SAT / ACT
- IELTS
- Intended major
- University size
- Budget
- Location preferences
- Campus preferences
- Research interest
- Financial aid requirements

The user can also select preferred regions and countries.

### Discover

Universities are shown as cards that can be swiped left or right.

- Right swipe → like
- Left swipe → pass
- Open card → view university details

The universities are ordered using the Match Score.

### Matches

All liked universities are collected in the Matches section.

Matches can be filtered by admission level:

- Reach
- Target
- Likely

Each university also shows its Match Score and basic information.

### University Profile

Each university has several sections:

- Overview
- Academics
- Cost & Aid
- Why this university

The "Why" section explains some of the reasons why the university fits the user's profile.

### University DNA

University DNA is based on the universities that the user likes.

For example, if a user keeps liking universities with strong CS programs, good research opportunities and coastal locations, those preferences become more visible in their University DNA.

The current version displays this as a radar chart.

## Match Score

The Match Score is based on six factors.

| Factor | Weight |
|---|---:|
| CS Fit | 28% |
| Location Fit | 18% |
| Cost Fit | 18% |
| Research Fit | 14% |
| Size Fit | 12% |
| Financial Aid Fit | 10% |
| **Total** | **100%** |

The weights are fixed and are the same on the frontend and backend.

The score is meant to answer one question:

**"How well does this university fit my preferences?"**

It is not an admission probability.

## Admission Reality

Admission Reality is calculated separately from the Match Score.

It currently uses the user's academic profile and the university's acceptance rate to classify universities as:

- **Reach**
- **Target**
- **Likely**

The current version uses a heuristic based on the difference between the user's academic strength and university selectivity.

This is not intended to be an accurate admission prediction.

### Planned improvement

The next version will use publicly available Common Data Set information where available, including:

- GPA ranges
- SAT percentiles
- ACT percentiles

This should make the admission classification more useful than the current heuristic.

## Tech Stack

### Frontend

- HTML
- CSS
- Vanilla JavaScript
- SVG
- LocalStorage

The current demo is intentionally kept simple. The frontend is a single HTML file and does not require a build system.

### Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- SQLite
- Uvicorn

### Testing

- Python unit tests
- Scoring functions tested separately from the API and database

## Project Structure

```text
UniMatch/
│
├── unimatch-demo.html
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── scoring.py
│   ├── database.py
│   ├── seed_data.py
│   ├── test_scoring.py
│   └── requirements.txt
│
└── README.md
