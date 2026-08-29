import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO HOMEFIX</p>

          <h1>
            Reliable Home Services
            <br />
            At Your Doorstep
          </h1>

          <p className="hero-text">
            Find trusted professionals for plumbing, electrical,
            cleaning, AC repair and many more home services.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">
              Get Started
            </Link>

            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Popular Services</h2>

        <p className="section-subtitle">
          Professional services you can trust
        </p>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Plumbing</h3>
            <p>
              Professional plumbing repair and maintenance.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Electrical</h3>
            <p>
              Safe and reliable electrical services.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">❄️</div>
            <h3>AC Repair</h3>
            <p>
              Fast AC repair and maintenance services.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🧹</div>
            <h3>Cleaning</h3>
            <p>
              Professional home cleaning services.
            </p>
          </div>

        </div>
      </section>

      {/* Why HomeFix */}
      <section className="why-section">
        <h2>Why Choose HomeFix?</h2>

        <div className="why-grid">

          <div>
            <h3>✓ Trusted Professionals</h3>
            <p>
              Connect with reliable service professionals.
            </p>
          </div>

          <div>
            <h3>✓ Easy Booking</h3>
            <p>
              Book your required service easily.
            </p>
          </div>

          <div>
            <h3>✓ Quality Service</h3>
            <p>
              Get professional and dependable services.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;