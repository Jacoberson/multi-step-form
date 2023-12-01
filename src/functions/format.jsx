import data from "../data.json";

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getAddOnName(addOn) {
  return data["add-ons"].find(item => item.id === addOn).name;
}

export { capitalize, getAddOnName };
