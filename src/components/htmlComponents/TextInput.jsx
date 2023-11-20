import { PropTypes } from "prop-types";

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default function TextInput({
  type = "text",
  name,
  id,
  placeholder,
  isRequired,
}) {
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
