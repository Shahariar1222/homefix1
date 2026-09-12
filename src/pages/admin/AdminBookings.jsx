import React, { useEffect, useState } from "react";
import "./Admin.css";

function AdminBookings() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:5000/api/bookings")

      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load bookings");
        }

        return response.json();
      })

      .then((data) => {
        setBookings(data);
        setLoading(false);
      })

      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

  }, []);

  return (
    <div className="admin-container">

      <h1>Manage Bookings</h1>

      {loading ? (
        <p>Loading bookings...</p>
      ) : (

        <div className="table-container">

          <table className="admin-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Provider</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {bookings.length === 0 ? (

                <tr>
                  <td colSpan="6">
                    No bookings found
                  </td>
                </tr>

              ) : (

                bookings.map((booking) => (

                  <tr key={booking._id}>

                    <td>{booking._id}</td>

                    <td>{booking.customer}</td>

                    <td>{booking.service}</td>

                    <td>{booking.provider}</td>

                    <td>{booking.date}</td>

                    <td>

                      <span
                        className={`badge ${
                          booking.status === "Completed"
                            ? "badge-success"
                            : booking.status === "Pending"
                            ? "badge-warning"
                            : booking.status === "Cancelled"
                            ? "badge-danger"
                            : ""
                        }`}
                      >
                        {booking.status}
                      </span>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default AdminBookings;