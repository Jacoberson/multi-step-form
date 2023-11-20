import { PropTypes } from "prop-types";

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default function Button({ type, text }) {
  return <button type={type}>{text}</button>;
}
