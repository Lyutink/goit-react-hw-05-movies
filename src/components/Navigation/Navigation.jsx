//import { NavLink } from "react-router-dom";
import {NavLinkStyled } from "./Navigation.styled";

const Navigation = () => (
    <nav>
        <NavLinkStyled
            exact
            to="/"
            activeStyle={{color: "#2196f3", textShadow: "0 0 10px rgb(63, 131, 209)"}}
        >Home</NavLinkStyled>
        <NavLinkStyled
            to="/movies"
            activeStyle={{color: "#2196f3", textShadow: "0 0 10px rgb(63, 131, 209)"}}
        >Movies</NavLinkStyled>
    </nav>
);

export default Navigation;