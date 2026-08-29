import { Link } from "react-router-dom";

function ProviderDashboard() {
  return (
    <div className="provider-dashboard">

      {/* ================= HEADER ================= */}
      <div className="dashboard-header">
        <div>
          <p className="dashboard-label">SERVICE PROVIDER</p>

          <h1>Provider Dashboard</h1>

          <p>
            Manage your services and customer bookings easily.
          </p>
        </div>

        <Link to="/add-service" className="add-service-btn">
          + Add Service
        </Link>
      </div>


      {/* ================= STATISTICS ================= */}
      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon">🛠️</div>

          <div>
            <p>Total Services</p>
            <h2>8</h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon">⏳</div>

          <div>
            <p>Pending Bookings</p>
            <h2>5</h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon">✓</div>

          <div>
            <p>Accepted Bookings</p>
            <h2>12</h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon">⭐</div>

          <div>
            <p>Completed Jobs</p>
            <h2>24</h2>
          </div>
        </div>

      </div>


      {/* ================= MY SERVICES ================= */}
      <section className="dashboard-section">

        <div className="section-header">

          <div>
            <h2>My Services</h2>

            <p>
              Manage the services you provide.
            </p>
          </div>

          <Link to="/add-service" className="outline-btn">
            + Add New
          </Link>

        </div>


        <div className="services-table">

          {/* Table Header */}
          <div className="table-header">
            <span>Service</span>
            <span>Category</span>
            <span>Price</span>
            <span>Action</span>
          </div>


          {/* Service 1 */}
          <div className="table-row">

            <div>
              <strong>❄️ AC Repair</strong>
            </div>

            <div>
              Electrical
            </div>

            <div>
              ৳800
            </div>

            <div className="action-buttons">

              <Link
                to="/edit-service/1"
                className="edit-btn"
              >
                Edit
              </Link>

              <button className="delete-btn">
                Delete
              </button>

            </div>

          </div>


          {/* Service 2 */}
          <div className="table-row">

            <div>
              <strong>🔧 Plumbing Service</strong>
            </div>

            <div>
              Plumbing
            </div>

            <div>
              ৳600
            </div>

            <div className="action-buttons">

              <Link
                to="/edit-service/2"
                className="edit-btn"
              >
                Edit
              </Link>

              <button className="delete-btn">
                Delete
              </button>

            </div>

          </div>


          {/* Service 3 */}
          <div className="table-row">

            <div>
              <strong>🧹 Home Cleaning</strong>
            </div>

            <div>
              Cleaning
            </div>

            <div>
              ৳1200
            </div>

            <div className="action-buttons">

              <Link
                to="/edit-service/3"
                className="edit-btn"
              >
                Edit
              </Link>

              <button className="delete-btn">
                Delete
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= RECENT BOOKINGS ================= */}
      <section className="dashboard-section">

        <div className="section-header">

          <div>
            <h2>Recent Bookings</h2>

            <p>
              Manage your latest customer bookings.
            </p>
          </div>

          <Link
            to="/booking-management"
            className="outline-btn"
          >
            View All
          </Link>

        </div>


        {/* Booking 1 */}
        <div className="booking-card">

          <div>
            <h3>❄️ AC Repair</h3>

            <p>
              Customer: <strong>Rahim Ahmed</strong>
            </p>

            <p>
              Date: 18 August 2026
            </p>
          </div>


          <div className="booking-actions">

            <span className="pending-status">
              Pending
            </span>

            <button className="accept-btn">
              Accept
            </button>

            <button className="reject-btn">
              Reject
            </button>

          </div>

        </div>


        {/* Booking 2 */}
        <div className="booking-card">

          <div>
            <h3>🔧 Plumbing Service</h3>

            <p>
              Customer: <strong>Karim Hasan</strong>
            </p>

            <p>
              Date: 19 August 2026
            </p>
          </div>


          <div className="booking-actions">

            <span className="accepted-status">
              Accepted
            </span>

            <button className="status-btn">
              Update Status
            </button>

          </div>

        </div>


        {/* Booking 3 */}
        <div className="booking-card">

          <div>
            <h3>🧹 Home Cleaning</h3>

            <p>
              Customer: <strong>Nusrat Jahan</strong>
            </p>

            <p>
              Date: 20 August 2026
            </p>
          </div>


          <div className="booking-actions">

            <span className="accepted-status">
              Completed
            </span>

            <button className="status-btn">
              View
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProviderDashboard;