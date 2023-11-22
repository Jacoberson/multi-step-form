import { PropTypes } from "prop-types";
import Checkbox from "../htmlComponents/Checkbox";

Step3.propTypes = {
  isYearly: PropTypes.bool,
};

export default function Step3({ isYearly }) {
  return (
    <div className="select-add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <ul>
        <li className="add-on">
          <Checkbox
            id="online-service"
            groupName="add-ons"
            value="online-service"
          />
          <div className="add-on-text">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className="add-on-price">{isYearly ? "+$10/yr" : "+$1/mo"}</p>
        </li>
        <li className="add-on">
          <Checkbox
            id="larger-storage"
            groupName="add-ons"
            value="larger-storage"
          />
          <div className="add-on-text">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className="add-on-price">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
        </li>
        <li className="add-on">
          <Checkbox
            id="customize-profile"
            groupName="add-ons"
            value="customize-profile"
          />
          <div className="add-on-text">
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p className="add-on-price">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
        </li>
      </ul>
    </div>
  );
}
