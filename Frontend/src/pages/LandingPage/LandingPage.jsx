import "./LandingPage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/vellko.png";
import {
  FaCloudUploadAlt,
  FaSignature,
  FaShieldAlt,
  FaFilePdf,
  FaHistory,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className="landing">

      <nav className="navbar">
        <img
          src={logo}
          alt="VELKO"
          className="logo"
        />

        {/* <div className="nav-links">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Sign Up</Link>
        </div> */}




  <div className="nav-links">
    <Link to="/SignIn" className="signin-btn">
      Sign In
    </Link>

    <Link to="/Signup" className="signup-btn">
      Sign Up
    </Link>
  </div>
      </nav>

      <section className="hero">

        <h1>
          Digital Signature &
          <span> Document Management Platform</span>
        </h1>

        <p>
          Upload PDF documents, sign electronically,
          verify authenticity, manage workflows and
          securely access your documents anytime.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

        <div className="features">

          <div className="feature-card">
            <FaCloudUploadAlt className="feature-icon" />
            <h3>Upload Documents</h3>
            <p>Securely upload PDF files.</p>
          </div>

          <div className="feature-card">
            <FaSignature className="feature-icon" />
            <h3>Digital Signature</h3>
            <p>Sign documents electronically.</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Verification</h3>
            <p>Public authenticity verification.</p>
          </div>

          <div className="feature-card">
            <FaFilePdf className="feature-icon" />
            <h3>PDF Management</h3>
            <p>Manage all uploaded documents.</p>
          </div>

          <div className="feature-card">
            <FaHistory className="feature-icon" />
            <h3>Audit Logs</h3>
            <p>Track every document action.</p>
          </div>

          <div className="feature-card">
            <FaCheckCircle className="feature-icon" />
            <h3>Secure Workflow</h3>
            <p>Enterprise-grade security.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default LandingPage;