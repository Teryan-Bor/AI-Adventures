from fastapi import FastAPI
from app.schemas import StoryRequest
from app.services.gemini import generate_story

app = FastAPI()

@app.get("/")
def root():
    return {"message": "AI Adventures API is running!"}

@app.post("/create")
def create_story(story: StoryRequest):
    generated_story = generate_story(
        characterName = story.characterName,
        genre = story.genre,
        world = story.world,
        description = story.description,
        steps = story.steps
    )

    return {
        "story": generated_story
    }
