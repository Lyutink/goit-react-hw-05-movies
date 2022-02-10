import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  /* &.active{
    color: red;
  } */
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 50px;
  font-weight: 700;
  color: #2a363b;
  font-size: 24px;
 
  &:hover,
    &:focus {
        text-shadow: 0 0 10px rgb(63, 131, 209);}
`
// .activeLink {
//   composes: link;
//   color: #2196f3;
// }

export {NavLinkStyled};