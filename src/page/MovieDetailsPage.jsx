import { useState, useEffect } from "react";
import { useParams, useLocation} from "react-router-dom";
import {Route } from "react-router-dom";
//import { useRouteMatch } from "react-router-dom";

import Loader from "components/Loader/Loader";

import { getMovieDetails } from "../services/moviesApi";
    
import Button from "components/Button/Button";
import CardMovie from "components/CardMovie/CardMovie";
import { Cast } from "./Cast";
import Reviews from "./Reviews";
// import {
//     AdditionalInfoLink, AdditionalInfoList,
//      AdditionalTitle, AdditionalInfoContainer
// } from "components/CardMovie/CardMovie.styled";
    


export default function MoviesDetailsPage() {
    const location = useLocation();
    console.log("MoviesDetailsPage Location", location);
    //const history = useHistory();
    //const { url} = useRouteMatch();
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

//     const clickBtnGoBack = () => {
//         console.log('location', location);
//         history.push(location?.state?.from ?? '/');
// console.log('MDP history', history)

//}

    return (
        <> 
            {loading && <Loader/>}
            

            {movieDetails && (
                <> 
                    <Button/>
                    <CardMovie movieDetails={movieDetails} />

                    {/* <AdditionalInfoContainer>
                        <AdditionalTitle>Additional information</AdditionalTitle>
                        <AdditionalInfoList>
                            <li><AdditionalInfoLink to={{
                                pathname: `${url}/cast`,
                                state: {from: location},
                                //state: { from:  location}, //location.state.from
                            }}>
                                Cast</AdditionalInfoLink></li>
                            <li><AdditionalInfoLink to={{
                                pathname: `${url}/reviews`,
                                state: {from: location},
                             //state: { from: location },
                            }}>Reviews</AdditionalInfoLink></li>
                        </AdditionalInfoList>
                    </AdditionalInfoContainer>     */}
                </>
            )}

            <Route path="/movies/:movieId/cast">
                <Cast/>
            </Route>

            <Route path="/movies/:movieId/reviews">
                <Reviews/>
            </Route>
        </>
    )
}
