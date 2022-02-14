import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "components/Loader/Loader";

import { getReviews } from "../services/moviesApi";
import { ReviewsItemTitle, ReviewsText} from "components/CardMovie/CardMovie.styled";


export function Reviews() {
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
                        <ReviewsItemTitle>{review.author}</ReviewsItemTitle>
                        <ReviewsText>{review.content}</ReviewsText>
                </li>
                )}
                </ul>
            ) :
                <p>We don`t have any reviews for this movie.</p>}
        </>
    );
}