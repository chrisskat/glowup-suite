import React from "react";
import { useNavigate } from "react-router-dom";
import * as reviewsAPI from '../../utilities/reviews-api';
import './NewReviewPage.css';
import { useState } from "react";

export default function NewReviewPage({addReview}) {
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState("")
  const [reviewData, setReviewData]= useState({
    service:"",
    comment:"",
    rating:"",
  })
  function handleChange(e){
    const newReview = {...reviewData, [e.target.name]: e.target.value};
    setReviewData(newReview)
  }

  function addReview(newReview){
  setNewReview([...newReview, newReview])
  reviewsAPI.addReviewToPage(newReview)
  }
  function handleSubmit(e) {
    e.preventDefault();
    reviewsAPI.addReviewToPage(reviewData).then((newReview) => {
      addReview(newReview);
      navigate("/reviews");
    })
    .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
    <div>
     <h2>Add a Review</h2>
     <form onSubmit={handleSubmit}>
  
     <label>Service</label>
     <input name="service" onChange={handleChange} />
     <label>Review</label>
     <input name="comment" onChange={handleChange} />
     <label>Rating</label>
     <input name="rating" onChange={handleChange} />
     <button type="submit">Add Review</button>
     </form>
    </div>
    </>
  );

}
