import { useState } from "react";
import StepNavigation from "./components/StepNavigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <StepNavigation setCurrentStep={setCurrentStep} />
      {currentStep === 1 && <Step1 setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <Step2 setCurrentStep={setCurrentStep} />}
    </>
  );
}

export default App;
