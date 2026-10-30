"use client";
import { storyFields } from "./storyFields";
import "./StoryForm.scss";
import { useFormHandle } from "./formHelper";
import { getWeatherType } from "@/services/helper";
import { Button } from "@/shared/Button/Button";
import { FieldSection } from "@/shared/FieldSection/FieldSection";
import { useWeather } from "@/shared/WeatherContext/WeatherContext";

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

	const { weather, status } = useWeather();
	const season = getWeatherType(weather);

	return (
		<div className="create-section container">
			<div className="background-wrapper">
				<div  />

			</div>
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
							season={season}
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
							season={season}
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
							season={season}
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
