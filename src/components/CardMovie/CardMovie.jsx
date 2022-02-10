import PropTypes from "prop-types";
import {
    MovieCard, MovieInfoContainer,  MovieInfoGenres,
    MovieInfoTitle, MovieInfoTitle2, MovieInfoText, MovieImg
} from "./CardMovie.styled";

export default function CardMovie({ movieDetails }) {
    return (
        <MovieCard>
            <MovieImg src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.original_title} width="50px" langht='50px' />
            <MovieInfoContainer>
                <MovieInfoTitle>{movieDetails.original_title}</MovieInfoTitle>
                <MovieInfoText>User Score: { }</MovieInfoText>
                <MovieInfoTitle2>Overview</MovieInfoTitle2>
                <MovieInfoText>{movieDetails.overview}</MovieInfoText>
                <MovieInfoTitle2>Genres</MovieInfoTitle2>
                <MovieInfoGenres>
                    {movieDetails.genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>))}
                </MovieInfoGenres>
             </MovieInfoContainer>       
        </MovieCard>
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

