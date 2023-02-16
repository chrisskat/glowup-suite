import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import ServicesListPage from "../ServicesListPage/ServicesListPage";
import ServiceDetailPage from "../ServiceDetailPage/ServiceDetailPage";
import { services } from "../../data.js";
import HomePage from "../HomePage/HomePage";
import Reviews from "../Reviews/Reviews";
import NewReviewPage from "../NewReviewPage/NewReviewPage";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [reviews, setReviews] = useState([]);

  function addReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
          <Route
              path="/"
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
              addReview={addReview} />} 
            />

            <Route path="/new-review"
              element={<NewReviewPage 
              addReview={addReview} />} 
            />

          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}