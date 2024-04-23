import React, { useState } from 'react';

function ReviewForm({ onAddReview }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      title,
      date,
      body,
    };
    onAddReview(newReview);
    setTitle('');
    setDate('');
    setBody('');
  };

  return (
    <div>
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="Review Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Game Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
