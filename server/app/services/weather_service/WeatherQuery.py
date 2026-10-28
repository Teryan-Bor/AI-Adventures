from pydantic import BaseModel, field_validator, model_validator

class WeatherQuery(BaseModel):
    lat: str | None = None
    lon: str | None = None
    city: str = "Sumgait"

    @field_validator("lat", "lon", mode="before")
    @classmethod
    def clean_coord(cls, v):
        if v is None:
            return None
        if isinstance(v, str) and v.strip().lower() in ("", "null", "undefined", "nan"):
            return None
        return v

    @model_validator(mode="after")
    def both_or_none(self):
        if (self.lat is None) != (self.lon is None):
            self.lat = self.lon = None
        return self