import { PropTypes } from "prop-types";

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default function Button({ type, text, onClick, id }) {
  return (
    <button id={id} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
