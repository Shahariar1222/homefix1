import { Link } from "react-router-dom";
import "./BookingHistory.css";

function BookingHistory() {
  const bookings = [
    {
      id: 1,
      service: "AC Repair",
      date: "18 Aug 2026",
      time: "10:00 AM",
      price: "৳ 800",
      status: "Completed",
    },
    {
      id: 2,
      service: "Plumbing",
      date: "20 Aug 2026",
      time: "02:00 PM",
      price: "৳ 600",
      status: "Pending",
    },
    {
      id: 3,
      service: "Cleaning",
      date: "22 Aug 2026",
      time: "11:00 AM",
      price: "৳ 500",
      status: "Accepted",
    },
  ];

  return (
    <div className="booking-history-page">

      <div className="booking-history-header">
        <div>
          <p className="booking-small">MY BOOKINGS</p>

          <h1>Booking History</h1>

          <p>
            View and manage your service bookings.
          </p>
        </div>

        <Link to="/services" className="book-new-btn">
          + Book New Service
        </Link>
      </div>

      <div className="booking-history-card">

        <div className="history-heading">
          <span>Service</span>
          <span>Date & Time</span>
          <span>Price</span>
          <span>Status</span>
        </div>

        {bookings.map((booking) => (
          <div className="history-row" key={booking.id}>

            <div className="history-service">

              <div className="service-history-icon">
                🔧
              </div>

              <div>
                <h3>{booking.service}</h3>
                <p>HomeFix Professional</p>
              </div>

            </div>

            <div className="history-date">
              <strong>{booking.date}</strong>
              <span>{booking.time}</span>
            </div>

            <div className="history-price">
              {booking.price}
            </div>

            <div>
              <span
                className={`booking-status ${booking.status.toLowerCase()}`}
              >
                {booking.status}
              </span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BookingHistory;