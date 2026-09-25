import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
const token = localStorage.getItem("token");
const user = token
  ? JSON.parse(localStorage.getItem("user") || "null")
  : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        HomeFix
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/services">Services</Link>
{user?.role === "customer" && (
  <>
    <Link to="/booking-history">
      Booking History
    </Link>

    <Link to="/rating-review">
      Rating & Review
    </Link>
  </>
)}

{user?.role === "admin" && (
  <>
    <Link to="/provider-dashboard">
      Provider Dashboard
    </Link>

    <Link to="/admin">
      Admin Panel
    </Link>
  </>
)}

        {!user ? (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register" className="register-link">
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="register-link"
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;