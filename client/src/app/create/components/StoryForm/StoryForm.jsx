"use client";
import { FieldSection } from "@/app/shared/FieldSection/FieldSection";
import { storyFields } from "./storyFields";
import "./StoryForm.scss";
import { useFormHandle } from "./formHelper";
import { Button } from "@/app/shared/Button/Button";

const StoryForm = () => {
	const {
		currentStep,
		currentField,
		isLastStep,
		formData,
		loading,
		error,
		canContinue,
		handleChange,
		handleNext,
		handleBack,
		handleSubmit,
	} = useFormHandle();

	return (
		<div className="create-section container">
			<div className="background-wrapper" />
			<form className="form-section" onSubmit={handleSubmit}>
				<div className="step-counter">
					Step {currentStep + 1} из {storyFields.length}
				</div>

				<div className="question-card">
					<h2>{currentField.question}</h2>
					<FieldSection
						name={currentField.name}
						type={currentField.type}
						value={formData[currentField.name] || ""}
						placeholder={currentField.placeholder}
						onChange={handleChange}
						options={currentField.options}
					/>
				</div>

				<div className="wizard-buttons">
					{currentStep > 0 && (
						<Button
							type="button"
							onClick={handleBack}
							season={"winter"}
							size="sm"
							className="form-btn"
						>
							Prev
						</Button>
					)}

					{!isLastStep && (
						<Button
							type="button"
							onClick={handleNext}
							season={"winter"}
							size="sm"
							className="form-btn"
							disabled={!canContinue}
						>
							Next
						</Button>
					)}

					{isLastStep && (
						<Button
							type="submit"
							size="sm"
							season={"winter"}
							className="form-btn"
							disabled={!canContinue}
						>
							{loading ? "Generating..." : "Create"}
						</Button>
					)}
				</div>
			</form>
		</div>
	);
};

export default StoryForm;
