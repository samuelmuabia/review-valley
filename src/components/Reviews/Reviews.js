import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const[reviews,setReview] = useReviews();
    return (
        <div>
            <Row xs={1} md={2} lg={3} style={{width:"100%"}} className="g-4" >
            {reviews.map(review=><Review review={review} key={review.id}></Review>)}
            </Row>         

        </div>
    );
};

export default Reviews;