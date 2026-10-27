"use client";
import { useState } from "react";
import { storyFields } from "./storyFields";
// import { createStory } from "../../services/api";
// import { saveBook } from "../../services/storage";

export const useFormHandle = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currentField = storyFields[currentStep];
  const isLastStep = currentStep === storyFields.length - 1;
  const value = formData[currentField.name];
  const canContinue = String(value ?? "").trim() !== "";

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (canContinue && !isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLastStep) return handleNext();
    if (!canContinue) return;

    setLoading(true);
    setError("");

    try {
      // const generated = await createStory({
      //   ...formData,
      //   steps: Number(formData.steps),
      // });
      // saveBook({
      //   id: crypto.randomUUID(),
      //   title: generated.title,
      //   pages: generated.pages,
      // });
    } catch (err) {
      console.error(err);
      setError("Could not create the story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    currentStep, currentField, isLastStep, formData,
    loading, error, canContinue,
    handleChange, handleNext, handleBack, handleSubmit,
  };
};