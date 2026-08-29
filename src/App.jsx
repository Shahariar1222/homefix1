import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";

import ProviderDashboard from "./pages/ProviderDashboard";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import BookingManagement from "./pages/BookingManagement";
import BookService from "./pages/BookService";
import BookingHistory from "./pages/BookingHistory";
import RatingReview from "./pages/RatingReview";


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
          Provider Dashboard
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


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* AUTH */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* CUSTOMER */}
        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/book-service"
          element={<BookService />}
        />

        <Route
          path="/booking-history"
          element={<BookingHistory />}
        />

        {/* RATING & REVIEW */}
        <Route
          path="/rating-review"
          element={<RatingReview />}
        />

        {/* SERVICE PROVIDER */}
        <Route
          path="/provider-dashboard"
          element={<ProviderDashboard />}
        />

        <Route
          path="/add-service"
          element={<AddService />}
        />

        <Route
          path="/edit-service"
          element={<EditService />}
        />

        <Route
          path="/booking-management"
          element={<BookingManagement />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;