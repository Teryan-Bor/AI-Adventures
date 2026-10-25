from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import StoryRequest
from app.services.gemini import generate_story

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

    return generate_story(payload)
