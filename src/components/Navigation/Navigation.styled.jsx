import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 24px;
 
`
// .activeLink {
//   composes: link;
//   color: #2196f3;
// }

export {NavLinkStyled};