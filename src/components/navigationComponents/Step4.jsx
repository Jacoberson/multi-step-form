import { PropTypes } from "prop-types";

Step4.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function Step4() {
  return (
    <div className="confirm">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <ul>
        <li className="selected-plan">
          <h3>Arcade (Monthly)</h3>
          <p>Change</p>
          <p>$9/mo</p>
        </li>
        <li className="selected-add-on">
          <h3>Online service</h3>
          <p>+$1/mo</p>
        </li>
        <li className="selected-add-on">
          <h3>Larger storage</h3>
          <p>+$2/mo</p>
        </li>
      </ul>
      <p>Total (per month)</p>
      <p>+$12/mo</p>
    </div>
  );
}
