// import "./SignupPage.css";
// import { Link } from "react-router-dom";

// function Signup() {
//   return (
//     <div className="auth-container">
//       <div className="auth-card">

//         <h2>Create Account</h2>
//         <p className="subtitle">
//           Create your VELKO SIGN account
//         </p>

//         <form>

//           <input
//             type="text"
//             placeholder="Full Name"
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//           />

//           <button type="submit">
//             Sign Up
//           </button>

//         </form>

//         <p className="bottom-text">
//           Already have an account?
//           <Link to="/SignIn"> Sign In</Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Signup;


import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.placeholder.replace(" ", "").toLowerCase()]: e.target.value });
  // };

const handleChange = (e) => {
  const keyMap = {
    "Full Name": "fullName",
    "Email Address": "email",
    "Password": "password",
  };

  const key = keyMap[e.target.placeholder];
  setForm({ ...form, [key]: e.target.value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/users/signup", form);

      alert("Signup successful!");
      navigate("/SignIn");

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Create Account</h2>
        <p className="subtitle">
          Create your VELKO SIGN account
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
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