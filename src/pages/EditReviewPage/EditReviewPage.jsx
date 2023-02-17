import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as reviewsAPI from '../../utilities/reviews-api'

export default function EditReviewPage({ review, onSave }) {
    const navigate = useNavigate();
  const [reviewData, setReviewData] = useState({
    service: '',
    comment: '',
    rating: '',
  });
  const [error, setError] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    const updateReview2 = await reviewsAPI.updateReview(reviewData)
    console.log(updateReview2)
    setReviewData(updateReview2)
    navigate("/reviews");
  }
  function handleChange(e) {
    const newReviewData = { ...reviewData, [e.target.name]: e.target.value };
    setReviewData(newReviewData);
    setError('')
  }
//   useEffect(() => {
//     setFormData({
//       service: review.service,
//       comment: review.comment,
//       rating: review.rating,
//     });
//   }, [review]);
//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }
//   async function handleSubmit(e) {
//     e.preventDefault();
//     const updateReview2 = await reviewsAPI.updateReview(review)
//     setFormData(updateReview2);
//     // onSave(formData);
//   }
  return (
    <div>
        <h1>Edit Page</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label>Service</label>
                <input name="service" value={reviewData.service} onChange={handleChange} />
                <label>Review</label>
                <input name="comment" value={reviewData.comment} onChange={handleChange} />
                <label>Rating</label>
                <input name="rating" value={reviewData.rating} onChange={handleChange} />
                <button type="submit">Edit Review</button>
            </form>
        </div>
{/* //     <>
//       <h2>Edit Review</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Service</label>
//         <input name="service" value={review.service} onChange={handleChange} />
//         <label>Review</label>
//         <input name="comment" value={review.comment} onChange={handleChange} />
//         <label>Rating</label>
//         <input type="number" name="rating" value={review.rating} onChange={handleChange} />
//         <button type="submit">Save Review</button>
//       </form>
//     </> */}
    </div>
  )
}