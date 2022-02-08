import PropTypes from "prop-types";
import { ButtonGoBack } from "./Button.styled";

export default function Button({ onClick }) {
  return (
      <ButtonGoBack onClick={onClick}>Go back</ButtonGoBack>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};