"""
Хэширование паролей для /auth/register и /auth/login.

Раньше этих эндпоинтов не существовало вовсе, хотя app.js уже полноценно их
вызывал (apiAuthLogin/apiAuthRegister, экран Login/Register с полем пароля) —
любая попытка реального входа с паролем падала с 404. См. README, раздел
"Исправлено при интеграции".

Используем PBKDF2-HMAC-SHA256 из стандартной библиотеки (hashlib), а не
bcrypt/passlib — чтобы не тащить лишнюю бинарную зависимость в requirements.txt
только ради демо-проекта. Для реального прод-запуска с большим числом
пользователей passlib[bcrypt] или argon2-cffi предпочтительнее, но для этого
масштаба PBKDF2 с 200k итераций — общепринятый и безопасный минимум (OWASP).
"""
import hashlib
import hmac
import secrets

_ITERATIONS = 200_000
_ALGO = "sha256"


def hash_password(password: str) -> str:
    salt = secrets.token_hex(16)
    digest = hashlib.pbkdf2_hmac(_ALGO, password.encode("utf-8"), bytes.fromhex(salt), _ITERATIONS)
    return f"{_ALGO}${_ITERATIONS}${salt}${digest.hex()}"


def verify_password(password: str, stored: str | None) -> bool:
    if not stored:
        return False
    try:
        algo, iterations, salt, hex_digest = stored.split("$")
        iterations = int(iterations)
    except ValueError:
        return False
    digest = hashlib.pbkdf2_hmac(algo, password.encode("utf-8"), bytes.fromhex(salt), iterations)
    return hmac.compare_digest(digest.hex(), hex_digest)
