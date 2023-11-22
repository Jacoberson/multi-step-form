import { PropTypes } from "prop-types";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";

Step2.propTypes = {
  isYearly: PropTypes.bool,
  setIsYearly: PropTypes.func,
};

export default function Step2({ isYearly, setIsYearly }) {
  return (
    <div className="select-plan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <ul>
        <li className="plan current-selected">
          <img src={ArcadeIcon} alt="" />
          <div className="plan-text">
            <h3>Arcade</h3>
            {isYearly ? (
              <>
                <p>$90/yr</p>
                <p className="free-months">2 months free</p>
              </>
            ) : (
              <p>$9/mo</p>
            )}
          </div>
        </li>
        <li className="plan">
          <img src={AdvancedIcon} alt="" />
          <div className="plan-text">
            <h3>Advanced</h3>
            {isYearly ? (
              <>
                <p>$120/yr</p>
                <p className="free-months">2 months free</p>
              </>
            ) : (
              <p>$12/mo</p>
            )}
          </div>
        </li>
        <li className="plan">
          <img src={ProIcon} alt="" />
          <div className="plan-text">
            <h3>Pro</h3>
            {isYearly ? (
              <>
                <p>$150/yr</p>
                <p className="free-months">2 months free</p>
              </>
            ) : (
              <p>$15/mo</p>
            )}
          </div>
        </li>
      </ul>
      <div className="toggle-container">
        <span className="monthly-text">Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            value="is-monthly"
            defaultChecked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className="slider round"></span>
        </label>
        <span className="yearly-text">Yearly</span>
      </div>
    </div>
  );
}
