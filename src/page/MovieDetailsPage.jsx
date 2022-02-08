import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Route } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink, useRouteMatch } from "react-router-dom";
//import { getMovieDetails } from "services/moviesAPI";
import * as moviesAPI from '../services/moviesAPI'

import CardMovie from "components/CardMovie/CardMovie";
import Cast from "components/Cast";
import Reviews from "components/Reviews";

export default function MoviesDetailsPage() {
      const { url} = useRouteMatch();
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    
    useEffect(() => {
        
        moviesAPI.getMovieDetails(movieId).then(results => {
            console.log("results", results);
            setMovieDetails( results );
        })
    }, [movieId]);


console.log("movieDetails", movieDetails);
    return (
        <> 
            <button> Go back</button>
            {movieDetails && (
            
                    <CardMovie movieDetails={movieDetails}/>
             
            )}

            <ul>
                <li><NavLink to={`${url}/cast`}>Cast</NavLink></li>
                <li><NavLink to={`${url}/reviews`}>Reviews</NavLink></li>
            </ul>

            <Route path="/movies/:movieId/cast">
                <Cast></Cast>
            </Route>

            <Route path="/movies/:movieId/reviews">
                <Reviews></Reviews>
            </Route>
        </>
    )
}
