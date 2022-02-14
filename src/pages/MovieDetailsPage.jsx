
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import toast from 'react-hot-toast';
import Loader from "components/Loader/Loader";

import { getMovieDetails } from "../services/moviesApi";
    
import Button from "components/Button/Button";
import CardMovie from "components/CardMovie/CardMovie";


export function MovieDetailsPage() {
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
                toast.error("Sorry, the selected movie was not found. Back to main page please");
            } finally {
                setLoading(false)
            }
        } 
        fetchMovieDetails();
    }, [movieId]);

    return (
        <main> 
            {loading && <Loader/>}

            {movieDetails && (
                <> 
                    <Button/>
                    <CardMovie movieDetails={movieDetails} />
                </>
            )}
        </main>
    )
}
