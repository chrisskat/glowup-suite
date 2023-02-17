import React from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";
import NewReviewPage from "../NewReviewPage/NewReviewPage";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import EditReviewPage from "../EditReviewPage/EditReviewPage";

export default function Reviews({ reviews, addReview, deleteReview, }) {
const handleDelete = (reviewid) => {
    console.log(`Delete button clicked for review ${reviewid}`);
    deleteReview(reviewid);
    window.location.reload();
};


    return (
        <div>
          <h1>Reviews Page</h1>
          <button>
            <Link to="/new-review">Add a New Review</Link>
          </button>
          <div>
            {reviews.map((review) => (
             <div key={review._id}> 
              <ReviewItem
                key={review._id}
                service={review.service}
                comment={review.comment}
                rating={review.rating}
              />
              <button onClick={() => handleDelete(review._id)}>Delete</button>
              <button>
              <Link to={`/${review._id}/edit`}>Edit</Link>
            </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    
    
    
    