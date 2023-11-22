import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

Checkbox.propTypes = {
  id: PropTypes.string,
  groupName: PropTypes.string,
  value: PropTypes.string,
};

export default function Checkbox({ id, groupName, value }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const clickedCheckbox = document.getElementById(id);
    const parentContainer = clickedCheckbox.parentElement.parentElement;

    if (parentContainer.classList.contains("add-on-selected")) {
      parentContainer.classList.remove("add-on-selected");
    } else {
      parentContainer.classList.add("add-on-selected");
    }
  }, [id, isChecked]);

  return (
    <>
      <label htmlFor={id} className="form-control">
        <input
          type="checkbox"
          className="checkbox"
          id={id}
          name={groupName}
          value={value}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </label>
    </>
  );
}
