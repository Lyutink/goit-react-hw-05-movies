import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
    CardMovieContainer, MovieInfoContainer,  MovieInfoGenres,
    MovieInfoTitle, MovieInfoTitle2, MovieInfoText, MovieImg
} from "./CardMovie.styled";

import {
    AdditionalInfoLink, AdditionalInfoList,
     AdditionalTitle, AdditionalInfoContainer
} from "./CardMovie.styled";

export default function CardMovie({ movieDetails }) {
    const location = useLocation();

    return (
        <>
        <CardMovieContainer>
            <MovieImg src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.original_title} width="50px" langht='50px' />
            <MovieInfoContainer>
                <MovieInfoTitle>{movieDetails.original_title} ({movieDetails.release_date})</MovieInfoTitle>
                <MovieInfoText>User Score: {movieDetails.vote_average * 10}%</MovieInfoText>
                <MovieInfoTitle2>Overview</MovieInfoTitle2>
                <MovieInfoText>{movieDetails.overview}</MovieInfoText>
                <MovieInfoTitle2>Genres</MovieInfoTitle2>
                <MovieInfoGenres>
                    {movieDetails.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>))}
                </MovieInfoGenres>
                </MovieInfoContainer> 
        </CardMovieContainer>
            {/* //////////////////////////////////////// */}
        <AdditionalInfoContainer>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <AdditionalInfoList>
                    <li><AdditionalInfoLink to={`/movies/${movieDetails.id}/cast`}
                        state= {{ from: location?.state?.from ?? '/' }}
                     >   
                    Cast</AdditionalInfoLink></li>
                <li><AdditionalInfoLink to={`/movies/${movieDetails.id}/reviews`}
                        state= {{ from: location?.state?.from ?? '/' }}
                    >
                    Reviews</AdditionalInfoLink></li>
                </AdditionalInfoList>
                <Suspense fallback="">
                    <Outlet />
                </Suspense>    
        </AdditionalInfoContainer> 
    </>
    )    
}

CardMovie.propTypes = {
    movieDetails: PropTypes.shape({
        poster_path: PropTypes.string,
        original_title: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.array,
    })
};

