import React, { useState } from "react";
import "./RatingReview.css";

function RatingReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || review.trim() === "") {
      alert("Please give a rating and write a review.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="rating-page">

      <div className="rating-card">

        <h1>Rating & Review</h1>

        <p className="subtitle">
          Rate your service and share your experience.
        </p>

        <div className="provider">
          <div className="avatar">HP</div>

          <div>
            <h2>HomeFix Service Provider</h2>
            <p>Home Cleaning Service</p>
          </div>
        </div>

        <div className="rating-section">
          <h3>Give Your Rating</h3>

          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={star <= rating ? "star active" : "star"}
              >
                ★
              </button>
            ))}
          </div>

          <p className="rating-text">
            {rating === 0
              ? "Select a rating"
              : `${rating} out of 5`}
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <label htmlFor="review">
            Write Your Review
          </label>

          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your experience here..."
            rows="5"
            maxLength="500"
          />

          <p className="counter">
            {review.length}/500
          </p>

          <button
            type="submit"
            className="submit-button"
          >
            Submit Review
          </button>

        </form>

        {submitted && (
          <div className="success">
            ✓ Review submitted successfully!
          </div>
        )}

      </div>

    </div>
  );
}

export default RatingReview;