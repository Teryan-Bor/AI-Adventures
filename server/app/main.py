import logging
from typing import Annotated
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import GeneratedStory, StoryRequest
from app.services.gemini_service.gemini import generate_story
from .services.weather_service.weather_service import getWeather
from .services.weather_service.WeatherQuery import WeatherQuery


logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "AI Adventures API is running!"}

@app.get("/weather")
async def get_weather(query: Annotated[WeatherQuery, Query()]):
    return await getWeather(query)

@app.post("/create", response_model=GeneratedStory)
def create_story(payload: StoryRequest):
    story = generate_story(payload)
    return story



