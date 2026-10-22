'use client';	
import { FieldSection } from "@/app/shared/FieldSection/FieldSection";
import { storyFields } from "./storyFields";
import "./StoryForm.scss";
import { useState } from "react";

const StoryForm = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({});

	const isLastStep = currentStep === storyFields.length - 1;
	const currentField = storyFields[currentStep];

	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
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
				<button type="button" onClick={handleNext}>
					{isLastStep ? 'Create a story' : 'Next'}
				</button>
			</div>

		</div>

	)
}

export default StoryForm