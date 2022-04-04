import { useEffect, useState } from "react"

const useReviews=()=>{
    const [reviews,setReview]= useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=> res.json())
        .then(data=>setReview(data));
    },[]);
    return [reviews,setReview];
}
export default useReviews;