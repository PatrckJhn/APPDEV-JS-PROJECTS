import React from 'react';

function ReviewList({ reviews, onDeleteReview }) {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.title}</h3>
            <p>Date: {review.date}</p>
            <p>{review.body}</p>
            <button onClick={() => onDeleteReview(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
