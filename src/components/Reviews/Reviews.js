import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const[reviews,setReview] = useState([]);
    useEffect(()=>{
        fetch("review.json")
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div>
            {
                reviews.map(review=><Review review={review} key={review.id}></Review>)
            }
        </div>
    );
};

export default Reviews;