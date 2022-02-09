import { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import {Route } from "react-router-dom";
import { NavLink, useRouteMatch } from "react-router-dom";

import Loader from "components/Loader/Loader";

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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMovieDetails() {
            setLoading(true);
            try {
                const details = await getMovieDetails(movieId);
                setMovieDetails(details);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        } 
        fetchMovieDetails();
    }, [movieId]);

    const clickBtnGoBack = () => {
        console.log('location', location)
        history.push(location?.state?.from?.location ?? '/');
console.log('MDP location', history)

}

    return (
        <> 
            <Button type="button" onClick={clickBtnGoBack}/>
            {loading && <Loader/>}
            {movieDetails && (
                <>
                    <CardMovie movieDetails={movieDetails} />
                    <ul>
                        <li><NavLink to={{
                            pathname: `${url}/cast`,
                            state: { from:  location}, //location.state.from
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
