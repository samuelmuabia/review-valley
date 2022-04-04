import React from 'react';

const Review = (props) => {
    const{name,feedback,img,rating}= props.review
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{feedback}</p>
            <p>Rating : {rating} out of 5</p>
            
        </div>
    );
};

export default Review;