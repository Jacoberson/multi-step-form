import { PropTypes } from "prop-types";

Step4.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function Step4({ setCurrentStep }) {
  return (
    <div className="confirm">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-choices">
        <div className="selected-plan">
          <div className="selected-plan-text">
            <h3>Arcade (Monthly)</h3>
            <a className="change-plan" onClick={() => setCurrentStep(2)}>
              Change
            </a>
          </div>
          <p className="plan-price">$9/mo</p>
        </div>
        <ul className="selected-add-ons">
          <li className="selected-add-on">
            <p>Online service</p>
            <p className="add-on-price">+$1/mo</p>
          </li>
          <li className="selected-add-on">
            <p>Larger storage</p>
            <p className="add-on-price">+$2/mo</p>
          </li>
        </ul>
      </div>
      <div className="final-price-container">
        <p>Total (per month)</p>
        <p className="final-price">+$12/mo</p>
      </div>
    </div>
  );
}
