import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "components/GlobalStyle";
import { Toaster } from 'react-hot-toast';
import { NavLinkStyled, LayoutHeader, Container } from "./Layout.styled";

const Layout = () => (
    <>
    <LayoutHeader>   
        <nav>
            <GlobalStyle/>       
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
    </LayoutHeader>    
        <Container>  
            <Suspense fallback="">   
                <Outlet /> 
            </Suspense>     
            <Toaster/>
    </Container>         
    </>    
);

export default Layout;