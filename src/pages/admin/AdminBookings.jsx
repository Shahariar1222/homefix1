import React from "react";
import "./Admin.css";

function AdminBookings() {
  const bookings = [
    {
      id: 1,
      customer: "Rahim",
      service: "Plumbing",
      provider: "Karim",
      date: "26 Aug 2026",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Maria",
      service: "Electrical",
      provider: "Hasan",
      date: "27 Aug 2026",
      status: "Confirmed",
    },
    {
      id: 3,
      customer: "Sakib",
      service: "AC Repair",
      provider: "Rana",
      date: "28 Aug 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="admin-container">
      <h1>Manage Bookings</h1>

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
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.service}</td>
              <td>{booking.provider}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBookings;