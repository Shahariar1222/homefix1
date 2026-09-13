import React, { useState } from "react";
import "./RatingReview.css";

function RatingReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check rating and review
    if (rating === 0 || review.trim() === "") {
      alert("Please give a rating and write a review.");
      return;
    }

    try {
      // Get login token
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      // Send review to backend
      const response = await fetch(
        "http://localhost:5000/api/reviews",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            provider: "6a9b5e3389a3b6c951b10aef",
            rating: rating,
            comment: review.trim(),
            complaint: false
          })
        }
      );

      const data = await response.json();

      // Check backend response
      if (!response.ok) {
        throw new Error(
          data.error ||
          data.message ||
          "Failed to submit review"
        );
      }

      // Success
      console.log("Review saved in MongoDB:", data);

      setSubmitted(true);

      // Clear form
      setReview("");
      setRating(0);

    } catch (error) {
      console.error("Review submission error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="rating-page">

      <div className="rating-card">

        <h1>Rating & Review</h1>

        <p className="subtitle">
          Rate your service and share your experience.
        </p>


        {/* ================= PROVIDER ================= */}

        <div className="provider">

          <div className="avatar">
            HP
          </div>

          <div>
            <h2>HomeFix Service Provider</h2>

            <p>
              Home Cleaning Service
            </p>
          </div>

        </div>


        {/* ================= RATING ================= */}

        <div className="rating-section">

          <h3>
            Give Your Rating
          </h3>

          <div className="stars">

            {[1, 2, 3, 4, 5].map((star) => (

              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={
                  star <= rating
                    ? "star active"
                    : "star"
                }
              >
                ★
              </button>

            ))}

          </div>


          <p className="rating-text">

            {rating === 0
              ? "Select a rating"
              : `${rating} out of 5`
            }

          </p>

        </div>


        {/* ================= REVIEW FORM ================= */}

        <form onSubmit={handleSubmit}>

          <label htmlFor="review">
            Write Your Review
          </label>


          <textarea
            id="review"
            value={review}
            onChange={(e) =>
              setReview(e.target.value)
            }
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


        {/* ================= SUCCESS MESSAGE ================= */}

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