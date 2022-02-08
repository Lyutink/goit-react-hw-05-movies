import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as moviesAPI from '../../services/moviesAPI'

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        
        moviesAPI.getReviews(movieId).then(results => {
            console.log("results", results);
            setReviews([...results.results]);
            
        })
    }, [movieId]);
    
    return (
        <>
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