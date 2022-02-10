import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieCard = styled.div`
    display: flex;
    width: 1000px;
    margin-bottom: 24px;

`;
 
export const MovieImg = styled.img`
    width: 100%;
`;

export const MovieInfoContainer = styled.div`
    width: 60%;
    margin-left: 30px;
`;

export const MovieInfoTitle = styled.h1`
    color: #000000;
    font-size: 50px;
    font-weight: 500px;
`;

export const MovieInfoTitle2 = styled.h2`
    color: #000000;
    font-size: 40px;
    font-weight: 400px;
`;
export const MovieInfoText = styled.p`
    font-size: 24px;
    font-weight: 400px;
 `;

export const MovieInfoGenres = styled.ul`
    font-size: 24px;
    font-weight: 400px;
 `;

export const AdditionalInfoContainer = styled.div`
        border-top: 1px solid #2a363b;
`;

export const AdditionalTitle = styled.h4`
    color: #000000;
    font-size: 30px;
    font-weight: 400px;
`;

export const AdditionalInfoList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: disc;
    margin-bottom: 24px;
    border-bottom: 1px solid #2a363b;
`;

export const AdditionalInfoLink = styled(NavLink)`
    color: #000000;
    font-size: 24px;
    font-weight: 400px;
    text-decoration: none;
    &:hover,
    &:focus {
        text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.9), 0px 1px 2px rgba(0, 0, 0, 0.8),
        0px 2px 2px rgba(0, 0, 0, 0.12);
    }
`;

export const CastList = styled.ul`
    //display: flex;
    /* flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px; */
`;

export const CastListItem = styled.li`
    /* flex-basis: calc((100% - 100px) / 5); */
   
    margin-left: 20px;
    margin-top: 20px;
`;