import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as moviesAPI from '../services/moviesAPI'

export default function Cast() {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    
        useEffect(() => {
        
        moviesAPI.getMovieCast(movieId).then(results => {
            console.log("results", results);
            setActors([...results.cast] );
            
        })
        }, [movieId]);
    
    return (
        <>
            {actors && (
            <ul>
                {actors.map((actor) => 
                    <li key={actor.cast_id}>
                        {actor.profile_path && (
                            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                        )}
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                </li>
                )}
                </ul>
            )}
        </>
    );
}