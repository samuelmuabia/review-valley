import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Review.css"
const Review = (props) => {
    const{name,feedback,img,rating}= props.review
    return (
        <div >
    <Col  >
      <Card className='h-100'>
        <Card.Img style={{width:"50%" , margin:"auto"}} variant="top mr-0" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {feedback}
          <p><b>Rating : </b>{rating} out of 5</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
                
        </div>
    );
};

export default Review;