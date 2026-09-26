import { Link } from "react-router-dom";
import { useState } from "react";
import "./BookService.css";

function BookService() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBooking = async (e) => {

    e.preventDefault();

    if (
      name.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      address.trim() === "" ||
      date === "" ||
      time === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {

      setLoading(true);
      setSuccess(false);

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({

            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),

            service: "AC Repair",
            
            // ✅ ১. category ফিল্ডটি যুক্ত করা হয়েছে
            category: "AC Repair", 
            
            provider: "6a9b5e3389a3b6c951b10aef",

            address: address.trim(),
            date: date,
            time: time,

            notes: notes.trim(),

            price: 1000,

            // ✅ ২. status এর বানান ঠিক করা হয়েছে (P বড় হাতের অক্ষর)
            status: "Pending" 
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
          data.message ||
          "Failed to create booking"
        );
      }

      console.log("Booking saved in MongoDB:", data);

      setSuccess(true);

      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setDate("");
      setTime("");
      setNotes("");

    } catch (error) {

      console.error("Booking submission error:", error);
      alert(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-service-page">
      <div className="book-service-header">
        <div>
          <p className="page-small-title">HOMEFIX SERVICE</p>
          <h1>Book a Service</h1>
          <p>Schedule a trusted professional for your home.</p>
        </div>

        <Link to="/services" className="back-dashboard-btn">
          ← Services
        </Link>
      </div>

      <div className="selected-service-card">
        <div className="selected-service-icon">❄️</div>

        <div className="selected-service-info">
          <span>Selected Service</span>
          <h2>AC Repair</h2>
          <p>Professional air conditioner repair service</p>
        </div>

        <div className="selected-price">
          <span>Starting from</span>
          <strong>৳ 1,000</strong>
        </div>
      </div>

      <form className="booking-form-card" onSubmit={handleBooking}>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Service Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Preferred Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Preferred Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select time</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Additional Notes</label>
            <textarea
              rows="5"
              placeholder="Describe your problem..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
        </div>

        {success && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px 16px",
              background: "#e8f7ee",
              color: "#1b7a42",
              borderRadius: "8px",
              fontWeight: "600"
            }}
          >
            ✓ Booking submitted successfully!
          </div>
        )}

        <div className="book-form-actions">
          <Link to="/services" className="cancel-booking-btn">
            Cancel
          </Link>

          <button
            type="submit"
            className="confirm-booking-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Confirm Booking"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookService;