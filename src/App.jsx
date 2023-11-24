import { useState } from "react";
import StepNavigation from "./components/navigationComponents/StepNavigation";
import Step1 from "./components/navigationComponents/Step1";
import Step2 from "./components/navigationComponents/Step2";
import Step3 from "./components/navigationComponents/Step3";
import Step4 from "./components/navigationComponents/Step4";
import ThankYou from "./components/navigationComponents/ThankYou";
import Footer from "./components/navigationComponents/Footer";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  return (
    <>
      <StepNavigation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && (
        <Step2
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          isYearly={isYearly}
          setIsYearly={setIsYearly}
        />
      )}
      {currentStep === 3 && (
        <Step3
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
          isYearly={isYearly}
        />
      )}
      {currentStep === 4 && (
        <Step4
          selectedPlan={selectedPlan}
          selectedAddOns={selectedAddOns}
          setCurrentStep={setCurrentStep}
          isYearly={isYearly}
        />
      )}
      {currentStep === 5 && <ThankYou />}
      <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </>
  );
}

export default App;
