'use client';
import { FieldSection } from "@/app/shared/FieldSection/FieldSection";
import { storyFields } from "./storyFields";
import "./StoryForm.scss";
import { useState } from "react";
import { createStory } from "@/services/api";
import { saveBook } from "@/services/storage";

const StoryForm = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({});
	const [loading, setLoading] = useState(false);

	const isLastStep = currentStep === storyFields.length - 1;
	const currentField = storyFields[currentStep];

	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	}

	const handleSubmit = async (e) => {
		console.log("handle submit function working");

		e.preventDefault();
		setLoading(true);
		try {
			console.log("formdata", formData);
			const generated = await createStory(formData);
			console.log(JSON.parse(generated), "generated story");

			const book = {
				id: crypto.randomUUID(),
				title: generated.title,
				pages: generated.pages,
			};

			saveBook(book);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	const handleNext = () => {
		if (!isLastStep) {
			setCurrentStep(prev => prev + 1);
		} else {
			console.log("Data for Gemini AI", formData);
		}
	}

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1);
		}
	}

	return (
		<div className="form-section">
			<div className="step-counter">
				Step {currentStep + 1} из {storyFields.length}
			</div>

			<div className="question-card">
				<h2>{currentField.question}</h2>
				<FieldSection
					name={currentField.name}
					type={currentField.type}
					value={formData[currentField.name] || ''}
					placeholder={currentField.placeholder}
					onChange={handleChange}
					options={currentField.options}
				/>

			</div>

			<div className="wizard-buttons">
				{currentStep > 0 && (
					<button type="button" onClick={handleBack}>
						Prev
					</button>
				)}

				{!isLastStep && (
					<button type="button" onClick={handleNext}> Next </button>
				)}

				{isLastStep && (
					<button type="button" onClick={handleSubmit}>
						{loading ? 'Generating a story' : 'Create a story'}
					</button>
				)}

				
			</div>

		</div>

	)
}

export default StoryForm