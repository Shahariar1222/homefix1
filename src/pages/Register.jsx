import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-box">

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Join HomeFix today
        </p>

        <form>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
          />

          <label>Account Type</label>

          <select>
            <option value="customer">
              Customer
            </option>

            <option value="provider">
              Service Provider
            </option>
          </select>

          <button type="submit" className="auth-btn">
            Create Account
          </button>

        </form>

        <p className="auth-bottom">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;