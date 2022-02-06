import { NavLink } from "react-router-dom";


const Navigation = () => (
    <nav>
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
    </nav>
);

export default Navigation;