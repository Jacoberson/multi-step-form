import data from "../data.json";

function _getYearlyPriceForPlan(plan) {
  return data.plans.find(item => item.name === plan).yearlyPrice;
}

function _getMonthlyPriceForPlan(plan) {
  return data.plans.find(item => item.name === plan).monthlyPrice;
}

function _getYearlyPriceForAddOn(addOn) {
  return data["add-ons"].find(item => item.id === addOn).yearlyPrice;
}

function _getMonthlyPriceForAddOn(addOn) {
  return data["add-ons"].find(item => item.id === addOn).monthlyPrice;
}

function _convertToDollar(amount, billingType) {
  return billingType === "yearly" ? `$${amount}/yr` : `$${amount}/mo`;
}

function getAddOnPrice(addOn, billingType, isConverted = false) {
  let addOnPrice =
    billingType === "yearly"
      ? _getYearlyPriceForAddOn(addOn)
      : _getMonthlyPriceForAddOn(addOn);

  return isConverted ? _convertToDollar(addOnPrice, billingType) : addOnPrice;
}

function getPlanPrice(plan, billingType, isConverted = false) {
  let planPrice =
    billingType === "yearly"
      ? _getYearlyPriceForPlan(plan)
      : _getMonthlyPriceForPlan(plan);

  return isConverted ? _convertToDollar(planPrice, billingType) : planPrice;
}

function getTotalPrice(billingType, plan, addOns) {
  const basePrice =
    billingType === "yearly"
      ? _getYearlyPriceForPlan(plan)
      : _getMonthlyPriceForPlan(plan);

  let totalAddOnPrice = 0;
  addOns.forEach(
    addOn => (totalAddOnPrice += getAddOnPrice(addOn, billingType))
  );

  return _convertToDollar(basePrice + totalAddOnPrice, billingType);
}

export { getPlanPrice, getAddOnPrice, getTotalPrice };
