import { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import {Route } from "react-router-dom";
import { NavLink, useRouteMatch } from "react-router-dom";
//import { getMovieDetails } from "services/moviesAPI";
//import * as moviesAPI from "services/moviesAPI"
import { getMovieDetails } from "services/moviesAPI";
    
import Button from "components/Button/Button";
import CardMovie from "components/CardMovie/CardMovie";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

export default function MoviesDetailsPage() {
    const location = useLocation();
    const history = useHistory();
    const { url} = useRouteMatch();
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    
    useEffect(() => {
        
        getMovieDetails(movieId).then(results => {
            console.log("results", results);
            setMovieDetails( results );
        })
    }, [movieId]);

    const clickBtnGoBack = () => {
        history.push(location?.state?.from ?? '/');
}

    return (
        <> 
            <Button type="button" onClick={clickBtnGoBack}/>
            {movieDetails && (
                <>
                    <CardMovie movieDetails={movieDetails} />
                    <ul>
                        <li><NavLink to={{
                            pathname: `${url}/cast`,
                            state: { from: location.state.from },
                        }}>
                            Cast</NavLink></li>
                        <li><NavLink to={{
                            pathname: `${url}/reviews`,
                            state: { from: location.state.from },
                        }}>Reviews</NavLink></li>
                    </ul>
                </>
            )}

            <Route path="/movies/:movieId/cast">
                <Cast></Cast>
            </Route>

            <Route path="/movies/:movieId/reviews">
                <Reviews></Reviews>
            </Route>
        </>
    )
}
