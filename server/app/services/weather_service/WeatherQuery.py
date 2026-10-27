from pydantic import BaseModel

class WeatherQuery(BaseModel):
    lat: str | None = None,
    lon: str | None = None,
    city: str = "Yerevan"
