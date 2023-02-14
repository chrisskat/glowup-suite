import React, { useState } from "react";
import "./Reviews.css"
import axios from "axios";

export default function Reviews() {
  const [review, setReview] = useState(null);
  const [reviewData, setReviewData] = useState({
    title: '',
    body: '',
    rating: ''
  });

  const handleChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/reviews', reviewData)
      .then(res => setReview(res.data))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h1>Reviews Page</h1>

      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={reviewData.title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          value={reviewData.body}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={reviewData.rating}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {review && (
        <div className="review">
          <h3>{review.title}</h3>
          <p>{review.body}</p>
          <p>Rating: {review.rating}</p>
        </div>
      )}
    </div>
  );
}