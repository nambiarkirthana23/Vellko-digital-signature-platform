import "./SignupPage.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Create Account</h2>
        <p className="subtitle">
          Create your VELKO SIGN account
        </p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?
          <Link to="/SignIn"> Sign In</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;