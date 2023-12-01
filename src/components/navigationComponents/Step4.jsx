import { Fragment } from "react";
import { PropTypes } from "prop-types";
import { capitalize, getAddOnName } from "../../functions/format";
import {
  getPlanPrice,
  getAddOnPrice,
  getTotalPrice,
} from "../../functions/money";

Step4.propTypes = {
  selectedPlan: PropTypes.string,
  selectedAddOns: PropTypes.array,
  setCurrentStep: PropTypes.func,
  isYearly: PropTypes.bool,
};

export default function Step4({
  selectedPlan,
  selectedAddOns,
  setCurrentStep,
  isYearly,
}) {
  const billingType = isYearly ? "yearly" : "monthly";

  return (
    <div className="confirm">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-choices">
        <div className="selected-plan">
          <div className="selected-plan-text">
            <h3>
              {capitalize(selectedPlan) + " (" + capitalize(billingType) + ")"}
            </h3>
            <a className="change-plan" onClick={() => setCurrentStep(2)}>
              Change
            </a>
          </div>
          <p className="plan-price">
            {getPlanPrice(selectedPlan, billingType, true)}
          </p>
        </div>
        <ul className="selected-add-ons">
          {selectedAddOns.map(selectedAddOn => {
            return (
              <Fragment key={selectedAddOn}>
                <li className="selected-add-on">
                  <p>{getAddOnName(selectedAddOn)}</p>
                  <p className="add-on-price">
                    {getAddOnPrice(selectedAddOn, billingType, true)}
                  </p>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="final-price-container">
        <p>Total {isYearly ? "(per year)" : "(per month)"}</p>
        <p className="final-price">
          {getTotalPrice(billingType, selectedPlan, selectedAddOns)}
        </p>
      </div>
    </div>
  );
}
