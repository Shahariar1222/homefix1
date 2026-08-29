import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-box">

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to your HomeFix account
        </p>

        <form>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="forgot-password">
            <Link to="#">Forgot Password?</Link>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

        </form>

        <p className="auth-bottom">
          Don't have an account?{" "}
          <Link to="/register">Create Account</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;