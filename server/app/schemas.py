from pydantic import BaseModel

class StoryRequest(BaseModel):
    characterName: str
    genre: str
    world: str
    mood: str
    description: str
    steps: int

class GeneratedStory(BaseModel):
    title: str
    pages: list[str]