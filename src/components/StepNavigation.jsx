import { PropTypes } from "prop-types";
import Button from "./Button";

StepNavigation.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function StepNavigation({ setCurrentStep }) {
  const handleButtonClick = step => {
    setCurrentStep(step);
  };

  return (
    <nav>
      <Button type="button" text="1" onClick={() => handleButtonClick(1)} />
      <Button type="button" text="2" onClick={() => handleButtonClick(2)} />
      <Button type="button" text="3" onClick={() => handleButtonClick(3)} />
      <Button type="button" text="4" onClick={() => handleButtonClick(4)} />
    </nav>
  );
}
