import { PropTypes } from "prop-types";

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default function Button({ type, text, onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}
