import { Link } from "react-router-dom";

function ProviderDashboard() {
  return (
    <div className="provider-page">

      {/* ================= HEADER ================= */}

      <div className="provider-header">

        <div>
          <p className="provider-label">
            SERVICE PROVIDER
          </p>

          <h1>
            Provider Dashboard
          </h1>

          <p className="provider-description">
            Manage your services and customer bookings easily.
          </p>
        </div>

        <Link
          to="/add-service"
          className="add-service-btn"
        >
          + Add Service
        </Link>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="stats-grid">

        <div className="stat-card">

          <div className="stat-icon">
            🛠️
          </div>

          <div>
            <p>Total Services</p>
            <h2>8</h2>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            ⏳
          </div>

          <div>
            <p>Pending Bookings</p>
            <h2>5</h2>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            ✓
          </div>

          <div>
            <p>Accepted Bookings</p>
            <h2>12</h2>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            ★
          </div>

          <div>
            <p>Completed Jobs</p>
            <h2>24</h2>
          </div>

        </div>

      </div>


      {/* ================= MY SERVICES ================= */}

      <section className="dashboard-section">

        <div className="section-heading">

          <div>
            <h2>
              My Services
            </h2>

            <p>
              Manage the services you provide.
            </p>
          </div>

          <Link
            to="/add-service"
            className="small-add-btn"
          >
            + Add New
          </Link>

        </div>


        <div className="service-list">

          {/* ================= SERVICE 1 ================= */}

          <div className="service-item">

            <div className="service-info">

              <div className="service-icon">
                ❄️
              </div>

              <div>
                <h3>
                  AC Repair
                </h3>

                <p>
                  Air conditioner repair and maintenance
                </p>
              </div>

            </div>


            <div className="service-category">
              Electrical
            </div>


            <div className="service-price">
              ৳800
            </div>


            <div className="service-actions">

              <Link
                to="/edit-service"
                className="edit-btn"
              >
                Edit
              </Link>

              <button className="delete-btn">
                Delete
              </button>

            </div>

          </div>


          {/* ================= SERVICE 2 ================= */}

          <div className="service-item">

            <div className="service-info">

              <div className="service-icon">
                🔧
              </div>

              <div>
                <h3>
                  Plumbing Service
                </h3>

                <p>
                  Professional home plumbing service
                </p>
              </div>

            </div>


            <div className="service-category">
              Plumbing
            </div>


            <div className="service-price">
              ৳600
            </div>


            <div className="service-actions">

              <Link
                to="/edit-service"
                className="edit-btn"
              >
                Edit
              </Link>

              <button className="delete-btn">
                Delete
              </button>

            </div>

          </div>


          {/* ================= SERVICE 3 ================= */}

          <div className="service-item">

            <div className="service-info">

              <div className="service-icon">
                🧹
              </div>

              <div>
                <h3>
                  Home Cleaning
                </h3>

                <p>
                  Complete home cleaning service
                </p>
              </div>

            </div>


            <div className="service-category">
              Cleaning
            </div>


            <div className="service-price">
              ৳1200
            </div>


            <div className="service-actions">

              <Link
                to="/edit-service"
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

        <div className="section-heading">

          <div>
            <h2>
              Recent Bookings
            </h2>

            <p>
              Manage your latest customer bookings.
            </p>
          </div>

          <button className="view-all-btn">
            View All
          </button>

        </div>


        <div className="booking-list">

          {/* ================= BOOKING 1 ================= */}

          <div className="booking-item">

            <div className="booking-icon">
              ❄️
            </div>


            <div className="booking-details">

              <h3>
                AC Repair
              </h3>

              <p>
                Customer: <strong>Rahim Ahmed</strong>
              </p>

              <p>
                Date: 18 August 2026
              </p>

            </div>


            <span className="pending-badge">
              Pending
            </span>


            <div className="booking-buttons">

              <button className="accept-btn">
                Accept
              </button>

              <button className="reject-btn">
                Reject
              </button>

            </div>

          </div>


          {/* ================= BOOKING 2 ================= */}

          <div className="booking-item">

            <div className="booking-icon">
              🔧
            </div>


            <div className="booking-details">

              <h3>
                Plumbing Service
              </h3>

              <p>
                Customer: <strong>Karim Hasan</strong>
              </p>

              <p>
                Date: 19 August 2026
              </p>

            </div>


            <span className="accepted-badge">
              Accepted
            </span>


            <div className="booking-buttons">

              <button className="status-btn">
                Update Status
              </button>

            </div>

          </div>


          {/* ================= BOOKING 3 ================= */}

          <div className="booking-item">

            <div className="booking-icon">
              🧹
            </div>


            <div className="booking-details">

              <h3>
                Home Cleaning
              </h3>

              <p>
                Customer: <strong>Nusrat Jahan</strong>
              </p>

              <p>
                Date: 20 August 2026
              </p>

            </div>


            <span className="completed-badge">
              Completed
            </span>


            <div className="booking-buttons">

              <button className="view-btn">
                View
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProviderDashboard;