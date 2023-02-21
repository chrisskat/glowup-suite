import  React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reviews.css";
import NewReviewPage from "../NewReviewPage/NewReviewPage";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import EditReviewPage from "../EditReviewPage/EditReviewPage";
import * as reviewsAPI from "../../utilities/reviews-api"

export default function Reviews({ addReview, deleteReview, }) {
    const navigate = useNavigate();
const handleDelete = (reviewid) => {
    console.log(`Delete button clicked for review ${reviewid}`);
    deleteReview(reviewid);
    window.location.reload();
};

const [reviews, setReviews] = useState([]);

useEffect(function () {

    async function getReviews() {
      const reviews = await reviewsAPI.getAll()
      setReviews(reviews)
    }
    getReviews()

  }, []);

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


              {/* <button>
              <Link to={`/${review._id}/edit`}>Edit</Link>
            </button> */}
              <button onClick={() => {
                navigate(`/${review._id}/edit`, {state: {review: review}})
                }}>
                    <p>Edit</p>
               </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    
    
    
    