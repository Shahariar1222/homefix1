import { Link } from "react-router-dom";

function ProviderDashboard() {
  return (
    <div className="provider-page">

      <style>{`
        .provider-page {
          width: 100%;
          min-height: 100vh;
          background: #f5f9f7;
          padding-bottom: 50px;
        }

        .provider-header {
          width: 100%;
          box-sizing: border-box;
          padding: 45px 50px 35px;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 0 !important;
          position: relative !important;
        }

        .provider-header > div {
          width: 100%;
          position: static !important;
        }

        .provider-label {
          margin: 0 0 8px 0 !important;
          padding: 0 !important;
          font-size: 16px !important;
          line-height: 1.4 !important;
          color: #17324d !important;
          position: static !important;
        }

        .provider-header h1 {
          margin: 0 0 8px 0 !important;
          padding: 0 !important;
          font-size: 40px !important;
          line-height: 1.2 !important;
          color: #132b45 !important;
          position: static !important;
        }

        .provider-description {
          margin: 0 !important;
          padding: 0 !important;
          font-size: 18px !important;
          line-height: 1.5 !important;
          color: #17324d !important;
          position: static !important;
        }

        .add-service-btn {
          display: inline-block !important;
          position: static !important;
          margin-top: 25px !important;
          padding: 14px 24px !important;
          background: #079455 !important;
          color: white !important;
          text-decoration: none !important;
          border-radius: 7px !important;
          font-size: 18px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          box-sizing: border-box;
        }

        .add-service-btn:hover {
          background: #067a46 !important;
        }

        .stats-grid {
          width: 100%;
          box-sizing: border-box;
          padding: 0 50px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stat-card {
          width: 100%;
          min-height: 110px;
          box-sizing: border-box;
          background: white;
          border-radius: 16px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          gap: 22px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }

        .stat-icon {
          width: 70px;
          height: 70px;
          min-width: 70px;
          background: #e5f7ef;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .stat-card p {
          margin: 0 0 5px 0;
          font-size: 20px;
          line-height: 1.3;
          color: #5d6b7a;
        }

        .stat-card h2 {
          margin: 0;
          font-size: 34px;
          line-height: 1.2;
          color: #063d2d;
        }

        @media (max-width: 768px) {
          .provider-header {
            padding: 30px 20px 25px;
          }

          .provider-header h1 {
            font-size: 32px !important;
          }

          .stats-grid {
            padding: 0 20px;
          }

          .stat-card {
            padding: 22px;
          }
        }
      `}</style>

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
          <div className="stat-icon">★</div>
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
            <h2>My Services</h2>
            <p>Manage the services you provide.</p>
          </div>

          <Link
            to="/add-service"
            className="small-add-btn"
          >
            + Add New
          </Link>

        </div>

        <div className="service-list">

          <div className="service-item">

            <div className="service-info">

              <div className="service-icon">
                ❄️
              </div>

              <div>
                <h3>AC Repair</h3>
                <p>Air conditioner repair and maintenance</p>
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


          <div className="service-item">

            <div className="service-info">

              <div className="service-icon">
                🔧
              </div>

              <div>
                <h3>Plumbing Service</h3>
                <p>Professional home plumbing service</p>
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


          <div className="service-item">

            <div className="service-info">

              <div className="service-icon">
                🧹
              </div>

              <div>
                <h3>Home Cleaning</h3>
                <p>Complete home cleaning service</p>
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
            <h2>Recent Bookings</h2>
            <p>Manage your latest customer bookings.</p>
          </div>

          <button className="view-all-btn">
            View All
          </button>

        </div>


        <div className="booking-list">

          <div className="booking-item">

            <div className="booking-icon">
              ❄️
            </div>

            <div className="booking-details">

              <h3>AC Repair</h3>

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


          <div className="booking-item">

            <div className="booking-icon">
              🔧
            </div>

            <div className="booking-details">

              <h3>Plumbing Service</h3>

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


          <div className="booking-item">

            <div className="booking-icon">
              🧹
            </div>

            <div className="booking-details">

              <h3>Home Cleaning</h3>

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