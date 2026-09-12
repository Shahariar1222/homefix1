import React, { useEffect, useState } from "react";
import "./Admin.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalProviders: 0,
    totalBookings: 0,
    totalRevenue: 0,
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/dashboard")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load dashboard");
        }
        return response.json();
      })
      .then((data) => {
        setStats(data.stats);
        setRecentBookings(data.recentBookings);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="admin-dashboard">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>
            Welcome back! Here's what's happening with HomeFix.
          </p>
        </div>

        <div className="dashboard-date">
          📅 Today
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon blue">👥</div>

          <div>
            <p>Total Customers</p>
            <h2>{stats.totalCustomers}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">🧑‍🔧</div>

          <div>
            <p>Total Providers</p>
            <h2>{stats.totalProviders}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">📅</div>

          <div>
            <p>Total Bookings</p>
            <h2>{stats.totalBookings}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">💰</div>

          <div>
            <p>Total Revenue</p>
            <h2>৳{stats.totalRevenue}</h2>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="dashboard-content">

        {/* Recent Bookings */}
        <div className="dashboard-card large">

          <div className="card-header">
            <div>
              <h2>Recent Bookings</h2>
              <p>Latest booking activities</p>
            </div>

            <button className="view-btn">
              View All
            </button>
          </div>

          <div className="table-wrapper">

            <table className="admin-table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Provider</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {recentBookings.length === 0 ? (
                  <tr>
                    <td colSpan="6">
                      No bookings available
                    </td>
                  </tr>
                ) : (
                  recentBookings.map((booking) => (
                    <tr key={booking._id}>

                      <td>{booking._id}</td>

                      <td>{booking.customer}</td>

                      <td>{booking.service}</td>

                      <td>{booking.provider}</td>

                      <td>৳{booking.amount}</td>

                      <td>
                        <span
                          className={`status-badge ${booking.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
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
        </div>

        {/* Quick Overview */}
        <div className="dashboard-card">

          <div className="card-header">
            <div>
              <h2>Quick Overview</h2>
              <p>Platform summary</p>
            </div>
          </div>

          <div className="overview-list">

            <div className="overview-item">
              <span>Pending Bookings</span>
              <strong>{stats.pendingBookings || 0}</strong>
            </div>

            <div className="overview-item">
              <span>Active Providers</span>
              <strong>{stats.activeProviders || 0}</strong>
            </div>

            <div className="overview-item">
              <span>Pending Reviews</span>
              <strong>{stats.pendingReviews || 0}</strong>
            </div>

            <div className="overview-item">
              <span>Service Categories</span>
              <strong>{stats.serviceCategories || 0}</strong>
            </div>

            <div className="overview-item">
              <span>Cancelled Bookings</span>
              <strong>{stats.cancelledBookings || 0}</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;