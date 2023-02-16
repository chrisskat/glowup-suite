import React from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";
import NewReviewPage from "../NewReviewPage/NewReviewPage";
import ReviewItem from "../../components/ReviewItem/ReviewItem";

export default function Reviews({ reviews, addReview }) {
    return (
        <div>
          <h1>Reviews Page</h1>
          <button>
            <Link to="/new-review">Add a New Review</Link>
          </button>
          <div>
            {reviews.map((review) => (
              <ReviewItem
                key={review._id}
                service={review.service}
                comment={review.comment}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      );
    }
    
    
    
    
    