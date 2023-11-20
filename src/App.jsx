import { useState } from "react";
import StepNavigation from "./components/navigationComponents/StepNavigation";
import Step1 from "./components/navigationComponents/Step1";
import Step2 from "./components/navigationComponents/Step2";
import Step3 from "./components/navigationComponents/Step3";
import Step4 from "./components/navigationComponents/Step4";
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
