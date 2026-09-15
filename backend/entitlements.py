"""
Единый примитив доступа: "у этого пользователя есть премиум, да/нет".

Каждый премиум-эндпоинт в main.py начинается с `if not is_premium(user): raise
HTTPException(402, ...)` — один и тот же код 402 везде, чтобы фронт одним общим
обработчиком показывал paywall-модалку, а не писал проверку в каждом месте руками.
Реальной интеграции биллинга (Stripe и т.п.) здесь нет — Entitlement.plan сейчас
выставляется вручную через демо-эндпоинт POST /users/{id}/entitlement (main.py),
пока нет платёжного провайдера.
"""
from datetime import datetime


def is_premium(user) -> bool:
    ent = user.entitlement
    if not ent or ent.plan == "free":
        return False
    if ent.active_until is None:
        return True
    return ent.active_until > datetime.utcnow()
