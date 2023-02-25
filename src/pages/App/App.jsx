import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
// import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import ServicesListPage from "../ServicesListPage/ServicesListPage";
import ServiceDetailPage from "../ServiceDetailPage/ServiceDetailPage";
import { services } from "../../data.js";
import HomePage from "../HomePage/HomePage";
import Reviews from "../Reviews/Reviews";
import NewReviewPage from "../NewReviewPage/NewReviewPage";
import * as reviewsAPI from "../../utilities/reviews-api"
import EditReviewPage from "../EditReviewPage/EditReviewPage"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [reviews, setReviews] = useState([]);

  function addReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  function deleteReview(id) {
   
      reviewsAPI.deleteReview(id)
      setReviews([...reviews, reviews.filter((review) => review.id !== id)]);

  }

  function editReview(updatedReview) {
    reviewsAPI.updateReview(updatedReview)
      .then((updatedReview) => {
        const newReviews = reviews.map((review) =>
          review.id === updatedReview.id ? updatedReview : review
        );
        setReviews(newReviews);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(function () {

    async function getReviews() {
      const reviews = await reviewsAPI.getAll()
      setReviews(reviews)
    }
    getReviews()

  }, []);

  return (
    <div className="App">
          <NavBar user={user} setUser={setUser} />
          <Routes>
          <Route
              path="/glowup-suite"
              element={<HomePage  />}
            />
            <Route
              path="/services"
              element={<ServicesListPage services={services} />}
            />
            <Route
              path="/services/:serviceName"
              element={<ServiceDetailPage services={services} />}
            />
            <Route path="/reviews" 
              element={<Reviews reviews={reviews} 
              deleteReview={deleteReview} />} 
            />

            <Route path="/new-review"
              element={<NewReviewPage 
              addReview={addReview} />} 
            />

            <Route path="/:id/edit"
              element={<EditReviewPage
              editReview={editReview} />} 
            />

          </Routes>
          {/* </>
      ) : (
        <AuthPage setUser={setUser} />
      )} */}
    </div>
  );
}