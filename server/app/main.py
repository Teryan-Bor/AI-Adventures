import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import GeneratedStory, StoryRequest
from app.services.gemini import generate_story

logging.basicConfig(level=logging.INFO)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

@app.get("/")
def root():
    return {"message": "AI Adventures API is running!"}

@app.post("/create", response_model=GeneratedStory)
def create_story(payload: StoryRequest):
    logging.info("payload is: %s", payload)
    return generate_story(payload)
