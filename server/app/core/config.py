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

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", extra="ignore"
    )

settings = Settings()
