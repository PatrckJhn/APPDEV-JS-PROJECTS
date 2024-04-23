import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function App() {
  const [reviews, setReviews] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const deleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const reviewSection = isLoggedIn ? (
    <>
      <ReviewForm onAddReview={addReview} />
      <button onClick={handleLogout}>Logout</button>
      <ReviewList reviews={reviews} onDeleteReview={deleteReview} />
      
    </>
  ) : (
    <LoginForm onLogin={handleLogin} />
  );

  return (
    <>
      <Header />
      {reviewSection}
      <Footer />
    </>
  );
}
