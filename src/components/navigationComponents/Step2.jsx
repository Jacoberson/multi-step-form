import { PropTypes } from "prop-types";
import data from "../../data.json";

Step2.propTypes = {
  selectedPlan: PropTypes.string,
  setSelectedPlan: PropTypes.func,
  isYearly: PropTypes.bool,
  setIsYearly: PropTypes.func,
};

export default function Step2({
  selectedPlan,
  setSelectedPlan,
  isYearly,
  setIsYearly,
}) {
  return (
    <div className="select-plan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <ul>
        {data.plans.map(plan => {
          return (
            <li
              key={plan.name}
              className={
                selectedPlan === plan.name
                  ? `plan ${plan.name} current-selected`
                  : `plan ${plan.name}`
              }
              onClick={() => setSelectedPlan(plan.name)}>
              <img src={plan.icon} alt="" />
              <div className="plan-text">
                <h3>
                  {plan.name.charAt(0).toUpperCase() + plan.name.slice(1)}
                </h3>
                {isYearly ? (
                  <>
                    <p>${plan.yearlyPrice}/yr</p>
                    <p className="free-months">2 months free</p>
                  </>
                ) : (
                  <p>${plan.monthlyPrice}/mo</p>
                )}
              </div>
            </li>
          );
        })}
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
