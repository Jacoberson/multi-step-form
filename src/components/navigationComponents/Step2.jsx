import { PropTypes } from "prop-types";
import Radio from "../htmlComponents/Radio";
import Label from "../htmlComponents/Label";
import Button from "../htmlComponents/Button";

Step2.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function Step2({ setCurrentStep }) {
  return (
    <div className="select-plan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <ul>
        <li>
          <h3>Arcade</h3>
          <p>$9/mo</p>
        </li>
        <li>
          <h3>Advanced</h3>
          <p>$12/mo</p>
        </li>
        <li>
          <h3>Pro</h3>
          <p>$15/mo</p>
        </li>
      </ul>
      <Label name="monthly" text="Monthly" />
      <Radio
        id="monthly"
        name="billing"
        value="monthly"
        isDefaultChecked={true}
      />
      <Radio
        id="yearly"
        name="billing"
        value="yearly"
        isDefaultChecked={false}
      />
      <Label name="yearly" text="Yearly" />
      <Button type="button" text="Go Back" onClick={() => setCurrentStep(1)} />
      <Button
        type="submit"
        text="Next Step"
        onClick={() => setCurrentStep(3)}
      />
    </div>
  );
}
