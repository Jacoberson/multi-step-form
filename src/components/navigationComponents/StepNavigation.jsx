import { useEffect } from "react";
import { PropTypes } from "prop-types";
import Button from "../htmlComponents/Button";

StepNavigation.propTypes = {
  canNavigate: PropTypes.bool,
  currentStep: PropTypes.number,
  setCurrentStep: PropTypes.func,
};

export default function StepNavigation({
  canNavigate,
  currentStep,
  setCurrentStep,
}) {
  useEffect(() => {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => (button.className = ""));

    const selectedButton = document.getElementById(
      `step-${currentStep < 4 ? currentStep : 4}-button`
    );

    selectedButton.classList.add("selected-step");
  }, [currentStep]);

  const handleButtonClick = step => {
    canNavigate && setCurrentStep(step);
  };

  return (
    <nav>
      <Button
        id="step-1-button"
        type="button"
        text="1"
        onClick={() => handleButtonClick(1)}
      />
      <Button
        id="step-2-button"
        type="button"
        text="2"
        onClick={() => handleButtonClick(2)}
      />
      <Button
        id="step-3-button"
        type="button"
        text="3"
        onClick={() => handleButtonClick(3)}
      />
      <Button
        id="step-4-button"
        type="button"
        text="4"
        onClick={() => handleButtonClick(4)}
      />
    </nav>
  );
}
