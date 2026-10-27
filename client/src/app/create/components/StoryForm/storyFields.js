import { genres, worlds, moods } from "../../shared/options";

export const storyFields = [
  {
    name: "characterName",
    label: "Character Name",
    question: "What is the main character's name?",
    type: "text",
    placeholder: "For example: Arthur, Surrealist Cat, or Neo"
  },
  {
    name: "genre",
    label: "Select a genre",
    question: "What genre will the story take place in?",
    type: "select",
    options: genres
  },
  {
    name: "world",
    label: "Select a world",
    question: "What world do the events take place in?",
    type: "select",
    options: worlds
  },
  {
    name: "mood",
    label: "Select a mood",
    question: "Select the character's mood",
    type: "select",
    options: moods
  },
  {
    name: "description",
    label: "Description",
    question: "Describe the premise or main plot detail",
    type: "placeholder", // или тип textarea, оставляем как было
    placeholder: "A mysterious portal opened right in the middle of the kitchen..."
  },
  {
    name: "steps",
    label: "Number of steps",
    question: "How many chapters/steps will the story consist of?",
    type: "number",
    min: 1,
    max: 10,
    defaultValue: 3
  }
];