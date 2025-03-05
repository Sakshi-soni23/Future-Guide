import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for password toggle
 import { useAuth0 } from "@auth0/auth0-react";
 import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
 import { jwtDecode } from "jwt-decode";

const Loginpage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { logout } = useAuth0();

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSuccess = (creadentailResponse) => {
    console.log("Login success", creadentailResponse);
    const Decode = jwtDecode(creadentailResponse?.creadentail);
    console.log(Decode);
  };
  const handleError = () =>{
console.log("Error");

  }
  
  

  return (
    <div className="logout">
      <button className="ml-[20rem]">Log Out</button>
      <div className="container">
        <div className="sidepage">
          <h1 className="heading">Login for FUTURE GUIDE</h1>
          <p className="para">
            Unlock your path to success! Whether you're exploring career options
            or planning your future, Future Guide is here to help.
            <br />
            🌟 Personalized Guidance
            <br />
            💡 Expert Resources
            <br />
            📈 Step-by-Step Roadmaps
            <br />
            Sign in to start your journey today!
          </p>
        </div>
        <div className="other-section">
          <div className="upper-body">
            <h1 className="upper-heading">MAKE YOUR FUTURE BRIGHT</h1>
          </div>
          <div className="middle-body">
            {/* Username Input */}
            <input
              type="text"
              id="name"
              placeholder="Enter the username"
              className="input-field"
            />

            {/* Password Input with Toggle Button */}
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Password"
                className="input-field password-field"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePassword}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Remember Password & Forget Password */}
            <div className="forget">
              <p className="title">Forget Password?</p>
            </div>
          </div>

          <div className="log">
            <GoogleOAuthProvider clientId="303314073246-bn1r9ffvp7o4on1smgekq3g53jcb0bvn.apps.googleusercontent.com">
              <button className="btn1">Login</button>
              <h2 className="or-text">Or</h2>
              <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
            </GoogleOAuthProvider>
          </div>

          <div className="lower">
            <span className="highlight-text">
              Don't Think More Just Login In For Free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
