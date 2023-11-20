import { useState } from "react";
import StepNavigation from "./components/StepNavigation";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <StepNavigation setCurrentStep={setCurrentStep} />
      {currentStep === 1 && <Step1 setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <Step2 setCurrentStep={setCurrentStep} />}
      {currentStep === 3 && <Step3 setCurrentStep={setCurrentStep} />}
      {currentStep === 4 && <Step4 setCurrentStep={setCurrentStep} />}
    </>
  );
}

export default App;
