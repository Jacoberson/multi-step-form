import { PropTypes } from "prop-types";

Step4.propTypes = {
  setCurrentStep: PropTypes.func,
  isMonthly: PropTypes.bool,
};

export default function Step4({ setCurrentStep, isMonthly }) {
  return (
    <div className="confirm">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-choices">
        <div className="selected-plan">
          <div className="selected-plan-text">
            <h3>Arcade {isMonthly ? "(Monthly)" : "(Yearly)"}</h3>
            <a className="change-plan" onClick={() => setCurrentStep(2)}>
              Change
            </a>
          </div>
          <p className="plan-price">{isMonthly ? "$9/mo" : "$90/yr"}</p>
        </div>
        <ul className="selected-add-ons">
          <li className="selected-add-on">
            <p>Online service</p>
            <p className="add-on-price">{isMonthly ? "+$1/mo" : "+$10/yr"}</p>
          </li>
          <li className="selected-add-on">
            <p>Larger storage</p>
            <p className="add-on-price">{isMonthly ? "+$2/mo" : "+$20/yr"}</p>
          </li>
        </ul>
      </div>
      <div className="final-price-container">
        <p>Total (per month)</p>
        <p className="final-price">{isMonthly ? "+$12/mo" : "+$120/yr"}</p>
      </div>
    </div>
  );
}
