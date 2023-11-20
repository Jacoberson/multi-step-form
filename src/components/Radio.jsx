import { PropTypes } from "prop-types";

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isDefaultChecked: PropTypes.bool,
};

export default function Radio({ id, name, value, isDefaultChecked }) {
  return (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      defaultChecked={isDefaultChecked}
    />
  );
}
