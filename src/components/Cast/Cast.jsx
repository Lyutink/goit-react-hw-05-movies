import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "components/Loader/Loader";

import { getMovieCast } from "services/moviesAPI";

export default function Cast() {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function fatchCast() {
            setLoading(true);
            try {
                const results = await getMovieCast(movieId);
                setActors([...results.cast] );
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fatchCast();
        }, [movieId]);
    
return (
    <>
        {loading && <Loader/>}
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