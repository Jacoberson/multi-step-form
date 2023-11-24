import { PropTypes } from "prop-types";
import data from "../../data.json";

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
  const getTotalPrice = () => {
    const basePrice = isYearly
      ? data.plans.find(plan => plan.name === selectedPlan).yearlyPrice
      : data.plans.find(plan => plan.name === selectedPlan).monthlyPrice;

    let totalOfAddOns = selectedAddOns
      .map(selectedAddOn => {
        return isYearly
          ? data["add-ons"].find(addOn => addOn.id === selectedAddOn)
              .yearlyPrice
          : data["add-ons"].find(addOn => addOn.id === selectedAddOn)
              .monthlyPrice;
      })
      .reduce((acc, curr) => acc + curr, 0);

    return basePrice + totalOfAddOns;
  };

  return (
    <div className="confirm">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="selected-choices">
        <div className="selected-plan">
          <div className="selected-plan-text">
            <h3>
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}{" "}
              {isYearly ? "(Yearly)" : "(Monthly)"}
            </h3>
            <a className="change-plan" onClick={() => setCurrentStep(2)}>
              Change
            </a>
          </div>
          <p className="plan-price">
            {isYearly
              ? `$${
                  data.plans.find(plan => plan.name === selectedPlan)
                    .yearlyPrice
                }/yr`
              : `$${
                  data.plans.find(plan => plan.name === selectedPlan)
                    .monthlyPrice
                }/mo`}
          </p>
        </div>
        <ul className="selected-add-ons">
          {selectedAddOns.map(selectedAddOn => {
            return (
              <>
                <li key={selectedAddOn} className="selected-add-on">
                  <p>
                    {
                      data["add-ons"].find(addOn => addOn.id === selectedAddOn)
                        .name
                    }
                  </p>
                  <p className="add-on-price">
                    {isYearly
                      ? `+$${
                          data["add-ons"].find(
                            addOn => addOn.id === selectedAddOn
                          ).yearlyPrice
                        }/yr`
                      : `+$${
                          data["add-ons"].find(
                            addOn => addOn.id === selectedAddOn
                          ).monthlyPrice
                        }/mo`}
                  </p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="final-price-container">
        <p>Total {isYearly ? "(per year)" : "(per month)"}</p>
        <p className="final-price">{`+$${getTotalPrice()}${
          isYearly ? "/yr" : "/mo"
        }`}</p>
      </div>
    </div>
  );
}
