import { PropTypes } from "prop-types";

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default function Input({ type, name, id, placeholder, isRequired }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={isRequired}
    />
  );
}
