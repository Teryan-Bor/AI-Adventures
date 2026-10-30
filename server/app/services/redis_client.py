import os
import redis.asyncio as redis
from dotenv import load_dotenv

load_dotenv()

redis_client = redis.from_url(
    os.getenv("REDIS_URL", "redis://localhost:6380"),
    decode_responses=True
)

async def redis_ping() -> bool:
    try:
        return await redis_client.ping()
    except Exception:
        return False