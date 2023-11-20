import { PropTypes } from "prop-types";
import Button from "../htmlComponents/Button";

Step4.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function Step4({ setCurrentStep }) {
  return (
    <div className="confirm">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <ul>
        <li>
          <h3>Arcade (Monthly)</h3>
          <p>Change</p>
          <p>$9/mo</p>
        </li>
        <li>
          <h3>Online service</h3>
          <p>+$1/mo</p>
        </li>
        <li>
          <h3>Larger storage</h3>
          <p>+$2/mo</p>
        </li>
      </ul>
      <Button type="button" text="Go Back" onClick={() => setCurrentStep(3)} />
      <Button type="submit" text="Confirm" onClick={() => setCurrentStep(5)} />
    </div>
  );
}
