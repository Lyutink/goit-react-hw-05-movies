import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardMovieContainer = styled.div`
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
    width: 100%;  
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
        color: #2196f3;
        text-shadow: 0 0 10px rgb(63, 131, 209);
    }
`;

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: -20px;
    margin-top: -20px;
`;

export const CastListItem = styled.li`
    flex-basis: calc((100% - 100px) / 5);
    max-width: 180px;
    margin-left: 100px;
    margin-top: 20px;
`;

export const ReviewsItemTitle = styled.h4`
    font-size: 24px;
    font-weight: 400px;
`;

export const ReviewsText = styled.p`
    font-size: 30px;
    font-weight: 400px;
    max-width: 60%;
`;