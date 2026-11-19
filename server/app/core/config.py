from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "AI Adventures"

    REDIS_HOST: str = "redis"
    REDIS_PORT: int = 6379
    @property
    def REDIS_URL(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}"

    GEMINI_API_KEY: str | None = None
    WEATHER_API_KEY: str | None = None
    
    GEMINI_MODEL: str | None = None
    
    DB_USER: str
    DB_NAME: str
    DB_PASSWORD: str
    DB_POST: str
    @property
    def DB_URL_asyncpg(self) -> str:
        return f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASSWORD}@localhost:{self.DB_POST}/{self.DB_NAME}"
    

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", extra="ignore"
    )

settings = Settings()
