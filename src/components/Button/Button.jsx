import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import PropTypes from "prop-types";
import { ButtonGoBack } from "./Button.styled";

export default function Button() {
  const location = useLocation();
  console.log("ooooo", location);

  return (
    <NavLink to={location?.state?.from ?? '/'}>
      <ButtonGoBack type="button" text="ooo">Go back</ButtonGoBack>
    </NavLink>  
  );
}

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };