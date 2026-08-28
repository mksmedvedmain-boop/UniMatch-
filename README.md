# UniMatch

**UniMatch is a swipe-based university matching platform that separates how well a school fits your preferences from how realistic it is to get in.**

<!-- 
  TODO before publishing: replace this block with a real GIF or 3-4 screenshots
  showing (in this order) the swipe deck and the University DNA radar chart —
  these are the two most visual, most explainable-in-3-seconds parts of the
  product, and admissions readers / recruiters decide whether to keep scrolling
  based on what they see in the first screen of the README.

  How to record a GIF quickly:
    - Windows: ScreenToGif (free) — https://www.screentogif.com
    - Mac: Kap (free) — https://getkap.co
  Keep it under ~15 seconds: onboarding → swipe 2-3 cards → open University DNA.
  Compress with https://ezgif.com/optimize if the file is over ~8MB (GitHub
  renders large GIFs slowly).
-->
![UniMatch demo — swipe deck and University DNA](./docs/demo.gif)

**Live demo:** [unimatch-demo.html](./unimatch-demo.html) — a single self-contained file, no build step, no install. Open it directly in a browser.
<!-- TODO: once hosted (e.g. GitHub Pages), replace with a real https:// link here. -->

---

## Research question

**Can implicit feedback from swipe interactions (like/dislike patterns) improve university recommendations compared with manually specified preferences alone?**

**Hypothesis:** A recommendation model that incorporates implicit feedback (what a user actually swipes right on, including universities they didn't explicitly ask for) will produce better-fitting recommendations than a model based purely on the explicit preferences collected during onboarding (size, setting, climate, budget, etc.) — because stated preferences are an incomplete and sometimes inaccurate proxy for actual taste.

The current version establishes the **baseline**: a transparent weighted-scoring model driven entirely by explicit preferences (see [Match Score formula](#how-match-score-works) below). Once enough swipe data is collected from real users, this baseline gets compared against similarity-based approaches (cosine similarity, k-nearest neighbors, clustering) trained on implicit feedback, to test the hypothesis above.

## Why this project exists

Most "AI matches you with X" projects bolt a model onto whatever the user says they want and call it a day. UniMatch deliberately keeps two questions separate instead of blending them into one confusing number:

- **Preference Match** — how well a university fits what you're looking for (CS program strength, location, cost, research opportunities, size, financial aid).
- **Admission Reality** — how realistic getting in actually is, based on your academic profile vs. the school's selectivity.

A school can be a 94% Preference Match and still be a Reach — and the product tells you that plainly instead of hiding it behind one score.

## Tech stack — and why

| Layer | Choice | Why |
|---|---|---|
| Frontend | Vanilla HTML/CSS/JS (single file) | Zero build step, zero dependencies, opens directly in any browser — deliberate choice for a demo that needs to be inspectable and runnable by anyone in seconds, including non-technical reviewers. The production version is planned in React/Next.js + TypeScript once the product direction is validated. |
| Backend | FastAPI (Python) | Async-friendly, automatic OpenAPI docs (`/docs`), and Pydantic validation match well with a recommendation-system backend that will eventually shell out to pandas/scikit-learn for the ML phase. |
| Database | SQLite (dev) → PostgreSQL (prod-ready) | SQLAlchemy ORM means switching the connection string is the only change needed — see `backend/README.md`. |
| Scoring logic | Pure Python functions, framework-independent | `scoring.py` has zero external imports at runtime, so the core Match Score / Admission Reality logic is unit-testable (`test_scoring.py`) without installing FastAPI or SQLAlchemy — useful for iterating on the formula in isolation. |
| Planned ML layer | pandas, NumPy, scikit-learn | For the implicit-feedback comparison described in the research question above — cosine similarity, KNN, and clustering over swipe interaction data. |

## How Match Score works

A transparent weighted sum (not a black box) — every university's Match Score is the sum of:

- CS program fit — 28%
- Location fit (campus setting + climate) — 18%
- Cost fit (relative to stated budget) — 18%
- Research opportunities fit — 14%
- University size fit — 12%
- Financial aid fit (only weighted if the student marked aid as important) — 10%

Admission Reality (Reach / Target / Likely) is calculated **separately**, from the gap between the student's academic strength (GPA + SAT/ACT/IELTS, whichever were taken) and the university's acceptance rate — it does not factor into Match Score at all.

## Project structure

```
unimatch/
├── unimatch-demo.html      # frontend demo — single file, open directly in a browser
├── backend/
│   ├── main.py              # FastAPI app and routes
│   ├── database.py          # DB connection (SQLite for local dev)
│   ├── models.py             # SQLAlchemy models: User, University, Swipe
│   ├── schemas.py            # Pydantic request/response schemas
│   ├── scoring.py             # Match Score + Admission Reality (framework-independent)
│   ├── seed_data.py          # seeds the DB with the demo university dataset
│   ├── test_scoring.py       # unit tests for scoring.py — no dependencies required
│   └── requirements.txt
└── README.md
```

## How to run locally

**Frontend (no install needed):**
```bash
open unimatch-demo.html   # or just double-click the file
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
python seed_data.py          # creates unimatch.db and loads the demo universities
uvicorn main:app --reload    # http://127.0.0.1:8000/docs for interactive API docs
```

**Scoring logic only, no install required:**
```bash
cd backend
python3 test_scoring.py
```

See `backend/README.md` for the full API reference and what's intentionally not implemented yet (real recommendation engine, auth, College Scorecard integration).
