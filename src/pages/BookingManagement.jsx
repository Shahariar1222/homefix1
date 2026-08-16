import { Link } from "react-router-dom";

function BookingManagement() {
  const bookings = [
    {
      id: 1,
      customer: "Rahim Ahmed",
      service: "AC Repair",
      date: "18 Aug 2026",
      time: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Karim Hasan",
      service: "Plumbing",
      date: "19 Aug 2026",
      time: "02:00 PM",
      status: "Accepted",
    },
    {
      id: 3,
      customer: "Nusrat Jahan",
      service: "Electrical",
      date: "20 Aug 2026",
      time: "11:30 AM",
      status: "Completed",
    },
    {
      id: 4,
      customer: "Sakib Khan",
      service: "Cleaning",
      date: "21 Aug 2026",
      time: "04:00 PM",
      status: "Rejected",
    },
  ];

  return (
    <div className="booking-management-page">

      {/* Header */}
      <div className="booking-page-header">
        <div>
          <p className="page-small-title">SERVICE PROVIDER</p>

          <h1>Booking Management</h1>

          <p>
            Manage customer bookings and update their status.
          </p>
        </div>

        <Link
          to="/provider-dashboard"
          className="back-dashboard-btn"
        >
          ← Dashboard
        </Link>
      </div>

      {/* Stats */}
      <div className="booking-stats">

        <div className="booking-stat-card">
          <div className="stat-icon">📋</div>

          <div>
            <p>Total Bookings</p>
            <h2>12</h2>
          </div>
        </div>

        <div className="booking-stat-card">
          <div className="stat-icon">⏳</div>

          <div>
            <p>Pending</p>
            <h2>5</h2>
          </div>
        </div>

        <div className="booking-stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <p>Accepted</p>
            <h2>4</h2>
          </div>
        </div>

        <div className="booking-stat-card">
          <div className="stat-icon">★</div>

          <div>
            <p>Completed</p>
            <h2>3</h2>
          </div>
        </div>

      </div>

      {/* Booking List */}
      <div className="booking-list-card">

        <div className="management-title">
          <div>
            <h2>Customer Bookings</h2>
            <p>Review and manage all your bookings.</p>
          </div>
        </div>

        {bookings.map((booking) => (
          <div
            className="management-booking"
            key={booking.id}
          >

            <div className="customer-avatar">
              {booking.customer.charAt(0)}
            </div>

            <div className="booking-info">

              <h3>{booking.customer}</h3>

              <p className="booking-service-name">
                {booking.service}
              </p>

              <div className="booking-details">
                <span>📅 {booking.date}</span>
                <span>🕐 {booking.time}</span>
              </div>

            </div>

            <span
              className={`booking-status ${booking.status.toLowerCase()}`}
            >
              {booking.status}
            </span>

            <div className="management-actions">

              {booking.status === "Pending" && (
                <>
                  <button className="accept-btn">
                    Accept
                  </button>

                  <button className="reject-btn">
                    Reject
                  </button>
                </>
              )}

              {booking.status === "Accepted" && (
                <button className="complete-btn">
                  Mark Completed
                </button>
              )}

              {booking.status === "Completed" && (
                <span className="completed-text">
                  ✓ Service Completed
                </span>
              )}

              {booking.status === "Rejected" && (
                <span className="rejected-text">
                  Booking Rejected
                </span>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BookingManagement;