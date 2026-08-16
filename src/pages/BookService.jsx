import { Link } from "react-router-dom";
import "./BookService.css";

function BookService() {
  return (
    <div className="book-service-page">

      {/* Header */}
      <div className="book-service-header">
        <div>
          <p className="page-small-title">HOMEFIX SERVICE</p>

          <h1>Book a Service</h1>

          <p>
            Schedule a trusted professional for your home.
          </p>
        </div>

        <Link to="/services" className="back-dashboard-btn">
          ← Services
        </Link>
      </div>

      {/* Selected Service */}
      <div className="selected-service-card">

        <div className="selected-service-icon">
          ❄️
        </div>

        <div className="selected-service-info">
          <span>Selected Service</span>

          <h2>AC Repair</h2>

          <p>
            Professional air conditioner repair service
          </p>
        </div>

        <div className="selected-price">
          <span>Starting from</span>
          <strong>৳ 1,000</strong>
        </div>

      </div>

      {/* Form */}
      <div className="booking-form-card">

        <h2>Booking Information</h2>

        <p className="form-description">
          Enter your details and preferred schedule.
        </p>

        <div className="booking-form-grid">

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Service Address</label>
            <input
              type="text"
              placeholder="Enter your address"
            />
          </div>

          <div className="form-group">
            <label>Preferred Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Preferred Time</label>

            <select>
              <option>Select time</option>
              <option>09:00 AM</option>
              <option>11:00 AM</option>
              <option>01:00 PM</option>
              <option>03:00 PM</option>
              <option>05:00 PM</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Additional Notes</label>

            <textarea
              rows="5"
              placeholder="Describe your problem..."
            ></textarea>
          </div>

        </div>

        {/* Buttons */}
        <div className="book-form-actions">

          <Link
            to="/services"
            className="cancel-booking-btn"
          >
            Cancel
          </Link>

          <button className="confirm-booking-btn">
            Confirm Booking
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookService;