import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>Welcome to HomeFix Services</p>

      <div className="services-container">

        <div className="service-card">
          <h2>🔧 Plumbing</h2>
          <p>Professional plumbing services</p>

          <Link to="/book-service" className="book-service-btn">
            Book Service
          </Link>
        </div>

        <div className="service-card">
          <h2>⚡ Electrical</h2>
          <p>Home electrical repair services</p>

          <Link to="/book-service" className="book-service-btn">
            Book Service
          </Link>
        </div>

        <div className="service-card">
          <h2>❄️ AC Repair</h2>
          <p>Air conditioner repair services</p>

          <Link to="/book-service" className="book-service-btn">
            Book Service
          </Link>
        </div>

        <div className="service-card">
          <h2>🧹 Cleaning</h2>
          <p>Professional home cleaning services</p>

          <Link to="/book-service" className="book-service-btn">
            Book Service
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Services;