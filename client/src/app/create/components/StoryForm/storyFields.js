import { genres, worlds } from "../../shared/options";

export const storyField = [
    {
			name: "characterName",
			label: "Character Name",
			type: "text",
    },
		{
			name: "genre",
			label: "Select a genre",
			type: "select",
			options: genres
    },
		{
			name: "world",
			label: "Select a world",
			type: "select",
			options: worlds
    },
		{
			name: "description",
			label: "Description",
			type: "textarea",
    },
		{
			name: "steps",
			label: "Number of steps",
			type: "number",
			min: 1,
			max: 10
    },
		
]