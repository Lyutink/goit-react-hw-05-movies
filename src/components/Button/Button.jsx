import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ButtonGoBack, BtnIcon, BtnText } from "./Button.styled";

export default function Button() {
  const location = useLocation();
  console.log("ooooo", location);

  return (
    <NavLink style={{ textDecoration: "none"}} to={location?.state?.from ?? '/'}>
      <ButtonGoBack type="button" text="ooo">
        <BtnIcon />
        <BtnText>Go back</BtnText>
      </ButtonGoBack>
    </NavLink>  
  );
}

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };