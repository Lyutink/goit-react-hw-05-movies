import { NavLink } from "react-router-dom";
import {NavLinkStyled } from "./Navigation.styled";

const Navigation = () => (
    <nav>
        <NavLinkStyled
            exact
            to="/"
            activeStyle={{composes: "link", color: "#2196f3"}}
        >Home</NavLinkStyled>
        <NavLinkStyled
            exact
            to="/movies"
            activeStyle={{composes: "link", color: "#2196f3"}}
        >Movies</NavLinkStyled>
    </nav>
);

export default Navigation;