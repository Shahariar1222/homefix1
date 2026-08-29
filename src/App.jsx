import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// Public & Auth Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";

// Customer Pages
import BookService from "./pages/BookService";
import BookingHistory from "./pages/BookingHistory";
import RatingReview from "./pages/RatingReview";

// Service Provider Pages
import ProviderDashboard from "./pages/ProviderDashboard";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import BookingManagement from "./pages/BookingManagement";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageCustomers from "./pages/admin/ManageCustomers";
import ManageProviders from "./pages/admin/ManageProviders";
import ManageCategories from "./pages/admin/ManageCategories";
import AdminBookings from "./pages/admin/AdminBookings";
import ManageReviews from "./pages/admin/ManageReviews";


function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        HomeFix
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/booking-history">
          Booking History
        </Link>

        <Link to="/rating-review">
          Rating & Review
        </Link>

        <Link to="/provider-dashboard">
          Provider Panel
        </Link>

        <Link to="/admin">
          Admin Panel
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link
          to="/register"
          className="register-link"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}


function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h2>404 - Page Not Found</h2>

      <Link
        to="/"
        style={{ color: "#007bff" }}
      >
        হোমপেজে ফিরে যান
      </Link>
    </div>
  );
}


function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        {/* ================= PUBLIC & AUTH ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ================= CUSTOMER ================= */}

        <Route
          path="/book-service"
          element={<BookService />}
        />

        <Route
          path="/book-service/:id"
          element={<BookService />}
        />

        <Route
          path="/booking-history"
          element={<BookingHistory />}
        />

        <Route
          path="/rating-review"
          element={<RatingReview />}
        />


        {/* ================= SERVICE PROVIDER ================= */}

        <Route
          path="/provider-dashboard"
          element={<ProviderDashboard />}
        />

        <Route
          path="/add-service"
          element={<AddService />}
        />

        <Route
          path="/edit-service/:id"
          element={<EditService />}
        />

        <Route
          path="/booking-management"
          element={<BookingManagement />}
        />


        {/* ================= ADMIN PANEL ================= */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/customers"
          element={<ManageCustomers />}
        />

        <Route
          path="/admin/providers"
          element={<ManageProviders />}
        />

        <Route
          path="/admin/categories"
          element={<ManageCategories />}
        />

        <Route
          path="/admin/bookings"
          element={<AdminBookings />}
        />

        <Route
          path="/admin/reviews"
          element={<ManageReviews />}
        />


        {/* ================= FALLBACK ================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </Router>
  );
}


export default App;