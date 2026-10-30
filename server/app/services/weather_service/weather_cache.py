import json
from ..redis_client import redis_client

WEATHER_TTL = 600

def weather_key(lat, lon, city:str) -> str:
    if lat is not None and lon is not None:
        return f"weather:{lat:.2f}:{lon:.2f}"
    return f"weather:city:{city.strip().lower()}"

async def get_cached_weather(key: str):
    try:
        raw = await redis_client.get(key)
        return json.loads(raw) if raw else None
    except Exception as e:
        print(f"Redis get failed {e}")
        return None

async def set_cached_weather(key: str, data: dict, ttl: int = WEATHER_TTL):
    try: 
        await redis_client.set(key, json.dumps(data), ex=ttl)
    except Exception as e:
        print(f"Weather set failed: {e}")
