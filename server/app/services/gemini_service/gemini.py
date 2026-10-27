import json
import os

from dotenv import load_dotenv
from google import genai
from google.genai import types
from app.schemas import StoryRequest
from .prompts import STORYTELLER_SYSTEM_PROMPT, promptFn

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def generate_story(story: StoryRequest):
    prompt = promptFn(story)

    try:
        response = client.models.generate_content(
            model=os.getenv("GEMINI_MODEL"),
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=STORYTELLER_SYSTEM_PROMPT,
                response_mime_type="application/json",
            ),
        )

        story_data = json.loads(response.text)
        return story_data

    except Exception as e:
        print("Error", e)
        raise e
