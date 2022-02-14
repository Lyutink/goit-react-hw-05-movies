//import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "components/GlobalStyle";
import { Toaster } from 'react-hot-toast';
import { NavLinkStyled, NavigationHeader, Container } from "./Navigation.styled";

const Navigation = () => (
    <>
    <NavigationHeader>   
        <nav>
        <GlobalStyle/>       
        <NavLinkStyled to="/"
            // activeStyle={{color: "#2196f3", textShadow: "0 0 10px rgb(63, 131, 209)"}}
        >Home</NavLinkStyled>
        <NavLinkStyled
            to="/movies"
            // activeStyle={{color: "#2196f3", textShadow: "0 0 10px rgb(63, 131, 209)"}}
        >Movies</NavLinkStyled>
        </nav>
        </NavigationHeader>    
    <Container>   
            <Outlet /> 
            <Toaster/>
    </Container>         
    </>    
);

export default Navigation;