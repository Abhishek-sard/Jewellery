import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Admin=()=> {
 
  const [loginForm, setLoginForm] = useState({
    mobile: "",
    password: "",
  });

  const [userProfile, setUserProfile] = useState(null); // To store user profile data
  const [error, setError] = useState(null); // To handle errors
  const [successMessage, setSuccessMessage] = useState(null); // To display success messages



  // Handle Login 
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/v1/login", {
        mobile: loginForm.mobile,
        password: loginForm.password,
      });

      console.log("Login successful:", response.data);
      setUserProfile(response.data); // Save the user data if returned
      setError(null);
      setSuccessMessage("Login successful!");
      Navigate("/dashboard")
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
      setSuccessMessage(null);
    }
  };

  return (
    <div className="auth-container">
      {/* Login Form */}
      <div className="form-box login-box">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={loginForm.mobile}
              onChange={(e) =>
                setLoginForm({ ...loginForm, mobile: e.target.value })
              }
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>

      {/* Register Form */}
     

      {/* Display user profile data if available */}
      {userProfile && (
        <div className="profile-box">
          <h2>User Profile</h2>
          <p>
            <strong>Mobile:</strong> {userProfile.mobile}
          </p>
          {/* Add more fields based on the API response */}
        </div>
      )}
    </div>
  );
};

export default Admin
