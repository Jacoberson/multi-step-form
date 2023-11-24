import { useEffect } from "react";
import { PropTypes } from "prop-types";
import data from "../../data.json";

Step3.propTypes = {
  selectedAddOns: PropTypes.array,
  setSelectedAddOns: PropTypes.func,
  isYearly: PropTypes.bool,
};

export default function Step3({ selectedAddOns, setSelectedAddOns, isYearly }) {
  useEffect(() => {
    selectedAddOns.forEach(addOn => {
      const parentElement =
        document.getElementById(addOn).parentElement.parentElement;

      parentElement.classList.add("add-on-selected");
    });
  }, [selectedAddOns]);

  const updateSelectedAddOns = e => {
    const parentElement = e.parentElement.parentElement;
    if (e.checked) {
      setSelectedAddOns([...selectedAddOns, e.id]);
      parentElement.classList.add("add-on-selected");
    } else {
      setSelectedAddOns(selectedAddOns.filter(addOn => addOn !== e.id));
      parentElement.classList.remove("add-on-selected");
    }
  };

  return (
    <div className="select-add-ons">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <ul>
        {data["add-ons"].map(addOn => {
          return (
            <li key={addOn.name} className="add-on">
              <label htmlFor={addOn.id} className="form-control">
                <input
                  type="checkbox"
                  className="checkbox"
                  id={addOn.id}
                  name="add-on"
                  checked={selectedAddOns.includes(addOn.id)}
                  onChange={e => updateSelectedAddOns(e.target)}
                />
              </label>
              <div className="add-on-text">
                <h3>{addOn.name}</h3>
                <p>{addOn.description}</p>
              </div>
              <p className="add-on-price">
                {isYearly
                  ? `+$${addOn.yearlyPrice}/yr`
                  : `+$${addOn.monthlyPrice}/mo`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
