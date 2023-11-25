import { PropTypes } from "prop-types";
import Button from "../htmlComponents/Button";

Footer.propTypes = {
  currentStep: PropTypes.number,
  setCurrentStep: PropTypes.func,
};

export default function Footer({ currentStep, setCurrentStep }) {
  return (
    <footer>
      {currentStep !== 1 && (
        <Button
          type="button"
          text="Go Back"
          onClick={() => setCurrentStep(currentStep - 1)}
        />
      )}
      {currentStep !== 4 ? (
        <Button
          type="submit"
          text="Next Step"
          onClick={() => setCurrentStep(currentStep + 1)}
        />
      ) : (
        <Button
          id="confirm-btn"
          type="submit"
          text="Confirm"
          onClick={() => setCurrentStep(5)}
        />
      )}
    </footer>
  );
}
