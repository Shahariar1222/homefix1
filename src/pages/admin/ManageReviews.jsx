import React, { useState } from "react";

const ManageReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: "Rahim Ahmed",
      provider: "Karim Service",
      service: "AC Repair",
      rating: 5,
      comment:
        "Excellent service. The technician was very professional.",
      status: "Published",
    },
    {
      id: 2,
      customer: "Nusrat Jahan",
      provider: "Clean Home BD",
      service: "House Cleaning",
      rating: 4,
      comment:
        "Good service and reasonable price.",
      status: "Published",
    },
    {
      id: 3,
      customer: "Sakib Khan",
      provider: "Fast Plumbing",
      service: "Plumbing",
      rating: 2,
      comment:
        "The service was delayed and communication was poor.",
      status: "Pending",
    },
    {
      id: 4,
      customer: "Ayesha Rahman",
      provider: "PowerFix",
      service: "Electrical",
      rating: 5,
      comment:
        "Very quick and professional service.",
      status: "Published",
    },
  ]);

  const [filter, setFilter] = useState("All");

  const approveReview = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id
          ? {
              ...review,
              status: "Published",
            }
          : review
      )
    );
  };

  const deleteReview = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this review?"
    );

    if (confirmDelete) {
      setReviews(
        reviews.filter(
          (review) => review.id !== id
        )
      );
    }
  };

  const filteredReviews =
    filter === "All"
      ? reviews
      : reviews.filter(
          (review) => review.status === filter
        );

  return (
    <div className="admin-page">

      <div className="page-header">

        <div>
          <h1>Manage Reviews</h1>

          <p>
            Monitor and manage customer reviews.
          </p>
        </div>

        <div className="review-summary">

          <div>
            <strong>
              {reviews.length}
            </strong>

            <span>Total Reviews</span>
          </div>

          <div>
            <strong>
              {
                reviews.filter(
                  (r) => r.status === "Pending"
                ).length
              }
            </strong>

            <span>Pending</span>
          </div>

        </div>

      </div>

      <div className="filter-tabs">

        {["All", "Published", "Pending"].map(
          (item) => (
            <button
              key={item}
              className={
                filter === item
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() =>
                setFilter(item)
              }
            >
              {item}
            </button>
          )
        )}

      </div>

      <div className="reviews-list">

        {filteredReviews.map((review) => (

          <div
            className="review-card"
            key={review.id}
          >

            <div className="review-top">

              <div className="review-user">

                <div className="avatar">
                  {review.customer
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <h3>
                    {review.customer}
                  </h3>

                  <p>
                    Reviewed{" "}
                    <strong>
                      {review.provider}
                    </strong>
                  </p>
                </div>

              </div>

              <span
                className={
                  review.status === "Published"
                    ? "status-badge active"
                    : "status-badge pending"
                }
              >
                {review.status}
              </span>

            </div>

            <div className="review-service">

              <span>
                Service:{" "}
                <strong>
                  {review.service}
                </strong>
              </span>

              <span className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>

            </div>

            <p className="review-comment">
              "{review.comment}"
            </p>

            <div className="review-actions">

              {review.status === "Pending" && (
                <button
                  className="approve-btn"
                  onClick={() =>
                    approveReview(review.id)
                  }
                >
                  ✓ Approve
                </button>
              )}

              <button
                className="delete-btn"
                onClick={() =>
                  deleteReview(review.id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

        {filteredReviews.length === 0 && (
          <div className="empty-state">
            No reviews found.
          </div>
        )}

      </div>

    </div>
  );
};

export default ManageReviews;