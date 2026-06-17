// import "./SignInPage.css";
// import { Link } from "react-router-dom";

// function SignIn() {
//   return (
//     <div className="signin-container">

//       <div className="signin-card">

//         <h2>Welcome Back</h2>

//         <p className="signin-subtitle">
//           Sign in to access your documents
//         </p>

//         <form className="signin-form">

//           <input
//             type="email"
//             placeholder="Email Address"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//           />

//           <div className="signin-options">

//             <label>
//               <input type="checkbox" />
//               Remember Me
//             </label>

//             <Link to="/forgot-password">
//               Forgot Password?
//             </Link>

//           </div>

//           <button type="submit">
//             Sign In
//           </button>

//         </form>

//         <p className="signup-text">
//           Don't have an account?
//           <Link to="/SignUp"> Sign Up</Link>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default SignIn;



import "./SignInPage.css";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary navigation without backend
    navigate("/SignDocument");
  };

  return (
    <div className="signin-container">

      <div className="signin-card">

        <h2>Welcome Back</h2>

        <p className="signin-subtitle">
          Sign in to access your documents
        </p>

        <form
          className="signin-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            placeholder="Email Address"
            // required
          />

          <input
            type="password"
            placeholder="Password"
            // required
          />

          <div className="signin-options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          <button type="submit">
            Sign In
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>

    </div>
  );
}

export default SignIn;