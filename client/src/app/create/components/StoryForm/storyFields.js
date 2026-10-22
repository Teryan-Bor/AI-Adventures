import { genres, worlds } from "../../shared/options";

export const storyFields = [
  {
    name: "characterName",
    label: "Character Name",
    question: "Как зовут твоего главного героя?",
    type: "text",
    placeholder: "Например: Артур, Кот-сюрреалист или Нео"
  },
  {
    name: "genre",
    label: "Select a genre",
    question: "В каком жанре будет разворачиваться история?",
    type: "select",
    options: genres
  },
  {
    name: "world",
    label: "Select a world",
    question: "В каком мире происходят события?",
    type: "select",
    options: worlds
  },
  {
    name: "description",
    label: "Description",
    question: "Опиши завязку или главную деталь сюжета",
    type: "textarea",
    placeholder: "Загадочный портал открылся прямо посреди кухни..."
  },
  {
    name: "steps",
    label: "Number of steps",
    question: "Из скольких глав/шагов будет состоять история?",
    type: "number",
    min: 1,
    max: 10,
    defaultValue: 3
  }
];