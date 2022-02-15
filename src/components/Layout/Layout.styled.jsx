import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 40px;
  font-weight: 700;
  color: #2a363b;
  
  &:hover,
    &:focus {
        text-shadow: 0 0 10px rgb(63, 131, 209);}
`

export const LayoutHeader = styled.header`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #2a363b;
  background-color: #c1eafc;
`
export const Container = styled.main`
  padding-top: 24px;
  min-height: 100vh;
  padding-left: 24px;
 
`