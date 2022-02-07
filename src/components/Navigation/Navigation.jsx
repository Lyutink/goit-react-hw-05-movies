import { NavLink } from "react-router-dom";
import { Nav } from "./Navigation.styled";

const Navigation = () => (
    <Nav>
        <NavLink
            exact
            to="/"
            activeStyle={{composes: "link", color: "#2196f3"}}
        >Home</NavLink>
        <NavLink
            exact
            to="/movies"
            activeStyle={{composes: "link", color: "#2196f3"}}
        >Movies</NavLink>
    </Nav>
);

export default Navigation;