import { PropTypes } from "prop-types";
import data from "../../data.json";

Step4.propTypes = {
  selectedPlan: PropTypes.string,
  setCurrentStep: PropTypes.func,
  isYearly: PropTypes.bool,
};

export default function Step4({ selectedPlan, setCurrentStep, isYearly }) {
  return (
    <div className="confirm">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-choices">
        <div className="selected-plan">
          <div className="selected-plan-text">
            <h3>
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}{" "}
              {isYearly ? "(Yearly)" : "(Monthly)"}
            </h3>
            <a className="change-plan" onClick={() => setCurrentStep(2)}>
              Change
            </a>
          </div>
          <p className="plan-price">
            {isYearly
              ? data.plans.find(plan => plan.name === selectedPlan).yearlyPrice
              : data.plans.find(plan => plan.name === selectedPlan)
                  .monthlyPrice}
          </p>
        </div>
        <ul className="selected-add-ons">
          <li className="selected-add-on">
            <p>Online service</p>
            <p className="add-on-price">{isYearly ? "+$10/yr" : "+$1/mo"}</p>
          </li>
          <li className="selected-add-on">
            <p>Larger storage</p>
            <p className="add-on-price">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
          </li>
        </ul>
      </div>
      <div className="final-price-container">
        <p>Total (per month)</p>
        <p className="final-price">{isYearly ? "+$120/yr" : "+$12/mo"}</p>
      </div>
    </div>
  );
}
