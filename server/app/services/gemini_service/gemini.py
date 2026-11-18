import json
from google import genai
from google.genai import types
from ...schemas.chat import StoryRequest
from .prompts import STORYTELLER_SYSTEM_PROMPT, promptFn
from ...core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)

def generate_story(story: StoryRequest):
    prompt = promptFn(story)

    try:
        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
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
