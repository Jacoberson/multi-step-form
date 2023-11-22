import { PropTypes } from "prop-types";
// import Radio from "../htmlComponents/Radio";
// import Label from "../htmlComponents/Label";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";

Step2.propTypes = {
  isMonthly: PropTypes.bool,
  setIsMonthly: PropTypes.func,
};

export default function Step2({ isMonthly, setIsMonthly }) {
  return (
    <div className="select-plan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <ul>
        <li className="plan current-selected">
          <img src={ArcadeIcon} alt="" />
          <div className="plan-text">
            <h3>Arcade</h3>
            {isMonthly ? (
              <p>$9/mo</p>
            ) : (
              <>
                <p>$90/yr</p>
                <p className="free-months">2 months free</p>
              </>
            )}
          </div>
        </li>
        <li className="plan">
          <img src={AdvancedIcon} alt="" />
          <div className="plan-text">
            <h3>Advanced</h3>
            {isMonthly ? (
              <p>$12/mo</p>
            ) : (
              <>
                <p>$120/yr</p>
                <p className="free-months">2 months free</p>
              </>
            )}
          </div>
        </li>
        <li className="plan">
          <img src={ProIcon} alt="" />
          <div className="plan-text">
            <h3>Pro</h3>
            {isMonthly ? (
              <p>$15/mo</p>
            ) : (
              <>
                <p>$150/yr</p>
                <p className="free-months">2 months free</p>
              </>
            )}
          </div>
        </li>
      </ul>
      <div className="billing-type">
        <label htmlFor="is-monthly">
          <input
            type="checkbox"
            value="is-monthly"
            defaultChecked={isMonthly}
            onChange={() => setIsMonthly(!isMonthly)}
          />
          <span>Is Monthly?</span>
        </label>
        {/* <Label name="monthly" text="Monthly" />
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
        <Label name="yearly" text="Yearly" /> */}
      </div>
    </div>
  );
}
