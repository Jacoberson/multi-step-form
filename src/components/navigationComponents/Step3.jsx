import { PropTypes } from "prop-types";
import Checkbox from "../htmlComponents/Checkbox";
import data from "../../data.json";

Step3.propTypes = {
  isYearly: PropTypes.bool,
};

export default function Step3({ isYearly }) {
  return (
    <div className="select-add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <ul>
        {data["add-ons"].map(addOn => {
          return (
            <li key={addOn.name} className="add-on">
              <Checkbox id={addOn.id} groupName="add-ons" value={addOn.id} />
              <div className="add-on-text">
                <h3>{addOn.name}</h3>
                <p>{addOn.description}</p>
              </div>
              <p className="add-on-price">
                {isYearly ? `+${addOn.yearlyPrice}` : `+${addOn.monthlyPrice}`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
