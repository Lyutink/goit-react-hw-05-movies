import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import Loader from "components/Loader/Loader";
import { getMovieCast } from "../services/moviesApi";
import { CastList, CastListItem } from "components/CardMovie/CardMovie.styled";
import ImagePlug from "components/ImagePlug";

export function Cast() {
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
                toast.error("We have no information about actors from this movie.")
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
            <CastList>
                {actors.map((actor) => 
                    <CastListItem key={actor.cast_id}>
                        {actor.profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                            ) : ( <ImagePlug/>
                        )}
                        <h3>{actor.name}</h3>
                        <p>Character: {actor.character}</p>
                </CastListItem>
                )}
                </CastList>
        )}
    </>
    );
}