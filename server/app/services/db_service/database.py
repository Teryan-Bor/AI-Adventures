import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text
from ...core.config import settings

engine = create_async_engine(url=settings.DB_URL_asyncpg, echo=True)


async def get_res():
    async with engine.connect() as conn:
        res = await conn.execute(text("SELECT 1"))
        print(f"{res=}")

asyncio.run(get_res())