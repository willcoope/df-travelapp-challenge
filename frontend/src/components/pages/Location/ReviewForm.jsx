import "../../Forecast.css";
import React, { useState } from "react";

const ReviewForm = ({ location }) => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Location: ", location);
    console.log("Rating: ", rating);
    console.log("Review: ", review);
  };
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="white-outline">Leave a Review:</h1>
      <div className="form-group" style={{ width: '85vw' }}>
        <select
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={{ width: '100%' }}
        >
          <option value="5">5/5</option>
          <option value="4">4/5</option>
          <option value="3">3/5</option>
          <option value="2">2/5</option>
          <option value="1">1/5</option>
        </select>
      </div>
      <div className="form-group" style={{ width: '85vw' }}>
        <textarea
          placeholder="Enter your review here..."
          id="comment"
          name="comment"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{ width: '100%' }}
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  );
};

export default ReviewForm;
