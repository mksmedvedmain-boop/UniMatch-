"""
Хеширование паролей для /auth/register и /auth/login.

Без внешних зависимостей — только stdlib (hashlib, secrets).
Формат хранения: pbkdf2_sha256$<iterations>$<salt_hex>$<dk_hex>
"""
import hashlib
import secrets

# OWASP-рекомендация для PBKDF2-HMAC-SHA256 — 600k итераций (2023+).
# Для демо/локального запуска этого достаточно; при переносе на прод
# можно поднять или перейти на argon2.
PBKDF2_ITERATIONS = 240_000


def hash_password(password: str) -> str:
    """Пароль -> строка для колонки users.password_hash."""
    salt = secrets.token_hex(16)
    dk = hashlib.pbkdf2_hmac(
        "sha256", password.encode("utf-8"), bytes.fromhex(salt), PBKDF2_ITERATIONS
    )
    return f"pbkdf2_sha256${PBKDF2_ITERATIONS}${salt}${dk.hex()}"


def verify_password(password: str, stored: str) -> bool:
    """Проверка пароля против записи из БД. Любая кривая запись -> False."""
    try:
        algo, iterations, salt, expected = stored.split("$")
        if algo != "pbkdf2_sha256":
            return False
        dk = hashlib.pbkdf2_hmac(
            "sha256",
            password.encode("utf-8"),
            bytes.fromhex(salt),
            int(iterations),
        )
        # compare_digest — защита от timing-атак.
        return secrets.compare_digest(dk.hex(), expected)
    except Exception:
        return False


def needs_rehash(stored: str) -> bool:
    """True, если хеш сделан старым числом итераций (для будущих миграций)."""
    try:
        return int(stored.split("$")[1]) < PBKDF2_ITERATIONS
    except Exception:
        return True
