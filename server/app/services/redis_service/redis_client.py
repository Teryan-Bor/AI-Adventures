import redis.asyncio as redis
from ...core.config import settings

redis_client = redis.from_url(
    settings.REDIS_URL,
    decode_responses=True
)

async def redis_ping() -> bool:
    try:
        return await redis_client.ping()
    except Exception:
        return False