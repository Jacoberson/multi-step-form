import { PropTypes } from "prop-types";

Label.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};

export default function Label({ name, text }) {
  return <label htmlFor={name}>{text}</label>;
}
