import { PropTypes } from "prop-types";

Checkbox.propTypes = {
  id: PropTypes.string,
  groupName: PropTypes.string,
  value: PropTypes.string,
  isDefaultChecked: PropTypes.bool,
};

export default function Checkbox({ id, groupName, value, isDefaultChecked }) {
  return (
    <input
      type="checkbox"
      id={id}
      name={groupName}
      value={value}
      defaultChecked={isDefaultChecked}
    />
  );
}
