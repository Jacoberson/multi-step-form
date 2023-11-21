import { PropTypes } from "prop-types";
import Checkbox from "../htmlComponents/Checkbox";

Step3.propTypes = {
  setCurrentStep: PropTypes.func,
};

export default function Step3() {
  return (
    <div className="select-add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <ul>
        <li className="add-on add-on-selected">
          <Checkbox
            id="online-service"
            groupName="add-ons"
            value="online-service"
            isDefaultChecked={true}
          />
          <div className="add-on-text">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className="add-on-price">+$1/mo</p>
        </li>
        <li className="add-on add-on-selected">
          <Checkbox
            id="larger-storage"
            groupName="add-ons"
            value="larger-storage"
            isDefaultChecked={true}
          />
          <div className="add-on-text add-on-selected">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className="add-on-price">+$2/mo</p>
        </li>
        <li className="add-on">
          <Checkbox
            id="customize-profile"
            groupName="add-ons"
            value="customize-profile"
            isDefaultChecked={false}
          />
          <div className="add-on-text">
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p className="add-on-price">+$2/mo</p>
        </li>
      </ul>
    </div>
  );
}
