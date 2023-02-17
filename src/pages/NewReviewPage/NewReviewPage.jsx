import React from "react";
import { useNavigate } from "react-router-dom";
import * as reviewsAPI from '../../utilities/reviews-api';
import './NewReviewPage.css';
import { useState } from "react";

export default function NewReviewPage({ addReview }) {
  const navigate = useNavigate();
  const [reviewData, setReviewData]= useState({
    service:"",
    comment:"",
    rating:"",
  });

  function handleChange(e) {
    const newReviewData = { ...reviewData, [e.target.name]: e.target.value };
    setReviewData(newReviewData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newReview = await reviewsAPI.addReviewToPage(reviewData);
    addReview(newReview);
    navigate("/reviews");
  }

  return (
    <>
      <div>
        <h2>Add a Review</h2>
        <form onSubmit={handleSubmit}>
          <label>Service</label>
          <input name="service" value={reviewData.service} onChange={handleChange} />
          <label>Review</label>
          <input name="comment" value={reviewData.comment} onChange={handleChange} />
          <label>Rating</label>
          <input name="rating" value={reviewData.rating} onChange={handleChange} />
          <button type="submit">Add Review</button>
        </form>
      </div>
    </>
  );
}
