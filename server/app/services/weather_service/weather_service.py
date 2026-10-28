import os
import httpx
from dotenv import load_dotenv
from fastapi import HTTPException
from .WeatherQuery import WeatherQuery

load_dotenv()

weather_api=os.getenv("WEATHER_API_KEY")

async def getWeather(query: WeatherQuery):
    try:
        if(query.lat is not None and query.lon is not None):
            lat_float = float(query.lat)
            lon_float = float(query.lon)

            weather_href=f"https://api.openweathermap.org/data/2.5/weather?lat={lat_float}&lon={lon_float}&appid={weather_api}&units=metric"
        
        else:
            weather_href=f"https://api.openweathermap.org/data/2.5/weather?q={query.city}&appid={weather_api}&units=metric"

        async with httpx.AsyncClient() as client:
            response = await client.get(weather_href)

            if response.status_code != 200:
                raise HTTPException(
                    status_code=response.status_code,
                    detail=f"Failed to fetch weather from external API: {response.text}"
                )

            return response.json()


    except Exception as e:
        print("Error to fetch weather data", e)
        raise e