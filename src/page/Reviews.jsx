import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "components/Loader/Loader";

import { getReviews } from "../services/moviesAPI";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        async function fatchReviews() {
            setLoading(true);
            try {
                const resReviews = await getReviews(movieId);
                setReviews([...resReviews.results]);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
            
        fatchReviews();
    }, [movieId]);
    
    return (
        <>
            {loading && <Loader/>}
            {reviews.length > 0  ? (
                <ul>
                {reviews.map((review) => 
                    <li key={review.id}>
                        <p>{review.author}</p>
                        <p>{review.content}</p>
                </li>
                )}
                </ul>
            ) :
                <p>We don`t have any reviews for this movie.</p>}
            {/* {reviews && (
            <ul>
                {reviews.map((review) => 
                    <li key={review.id}>
                        <p>{review.author}</p>
                        <p>{review.content}</p>
                </li>
                )}
                </ul>
            )} */}
        </>
    );
}