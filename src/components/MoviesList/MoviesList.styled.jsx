import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ListLi = styled.li`
    font-size: 24px;
    font-weight: 500px;
    :hover, :focus{
        text-shadow: 0 0 10px rgb(63, 131, 209);
    }
`
const ListLink = styled(NavLink)`
    text-decoration: none;
    &.active{
    color: #1e0ff0;}
`
export { ListLi, ListLink };