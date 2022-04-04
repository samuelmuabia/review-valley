import React from 'react';
import { Button, Row } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import {LinkContainer} from 'react-router-bootstrap'
const Home = () => {
    const[reviews,setReview] = useReviews();
    const topReviews = reviews.slice(0,3)
    return (
       <div>
            <div className='mx-4 d-flex align-items-center'>
         <div className='col-lg-6 '>
            <h1>It is a high time For Laptop</h1>
            <p>It’s here. Our first chip designed specifically for this one. Packed with an astonishing 16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, custom technologies, and industry-leading power efficiency,1 M1 is not just a next step for Mac — it’s another level entirely.</p>
        </div>
        <div className='col-lg-6'>
            <img className='img-fluid' src="images/Laptop.png" alt=""  />
        </div>
        </div>
        <div className='text-center'>
            <h1 className='my-3'>Customer Reviews</h1>
            <Row xs={1} md={2} lg={3} style={{width:"100%"}} className="g-4" >
            {topReviews.map(review=><Review review={review} key={review.id}></Review>)}
            </Row> 
            <LinkContainer to="/reviews">
            <Button color="primary" className='my-5'>See all Reviews</Button>
            </LinkContainer>
        </div>
       </div>
    );
};

export default Home;