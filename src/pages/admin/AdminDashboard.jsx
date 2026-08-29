import React from "react";
import "./Admin.css";
const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Customers",
      value: "1,248",
      icon: "👥",
      color: "blue",
    },
    {
      title: "Total Providers",
      value: "186",
      icon: "🧑‍🔧",
      color: "green",
    },
    {
      title: "Total Bookings",
      value: "2,856",
      icon: "📅",
      color: "purple",
    },
    {
      title: "Total Revenue",
      value: "৳4,85,600",
      icon: "💰",
      color: "orange",
    },
  ];

  const recentBookings = [
    {
      id: "#BK001",
      customer: "Rahim Ahmed",
      service: "AC Repair",
      provider: "Karim Service",
      amount: "৳800",
      status: "Completed",
    },
    {
      id: "#BK002",
      customer: "Nusrat Jahan",
      service: "House Cleaning",
      provider: "Clean Home BD",
      amount: "৳1,200",
      status: "Pending",
    },
    {
      id: "#BK003",
      customer: "Sakib Khan",
      service: "Plumbing",
      provider: "Fast Plumbing",
      amount: "৳600",
      status: "Confirmed",
    },
    {
      id: "#BK004",
      customer: "Ayesha Rahman",
      service: "Electrical Repair",
      provider: "PowerFix",
      amount: "৳700",
      status: "Completed",
    },
  ];

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Welcome back! Here's what's happening with HomeFix.</p>
        </div>

        <div className="dashboard-date">
          📅 Today
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <div className={`stat-icon ${stat.color}`}>
              {stat.icon}
            </div>

            <div>
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
              <span className="growth">↑ 12.5% from last month</span>
            </div>
          </div>
        ))}
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
                {recentBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>

                    <td>{booking.customer}</td>

                    <td>{booking.service}</td>

                    <td>{booking.provider}</td>

                    <td>{booking.amount}</td>

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
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
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
              <strong>24</strong>
            </div>

            <div className="overview-item">
              <span>Active Providers</span>
              <strong>154</strong>
            </div>

            <div className="overview-item">
              <span>Pending Reviews</span>
              <strong>18</strong>
            </div>

            <div className="overview-item">
              <span>Service Categories</span>
              <strong>12</strong>
            </div>

            <div className="overview-item">
              <span>Cancelled Bookings</span>
              <strong>32</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;