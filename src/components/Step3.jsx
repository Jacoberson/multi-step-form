import { PropTypes } from "prop-types";
import Button from "./Button";

Step3.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function Step3({ setCurrentStep }) {
  return (
    <div className="select-plan">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <ul>
        <li>
          <h3>Online service</h3>
          <p>Access to multiplayer games</p>
          <p>+$1/mo</p>
        </li>
        <li>
          <h3>Larger storage</h3>
          <p>Extra 1TB of cloud save</p>
          <p>+$2/mo</p>
        </li>
        <li>
          <h3>Customizable profile</h3>
          <p>Custom theme on your profile</p>
          <p>+$2/mo</p>
        </li>
      </ul>
      <Button type="button" text="Go Back" onClick={() => setCurrentStep(2)} />
      <Button
        type="submit"
        text="Next Step"
        onClick={() => setCurrentStep(4)}
      />
    </div>
  );
}
