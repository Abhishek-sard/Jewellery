import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginUser.css";

const LoginUser = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [userProfile, setUserProfile] = useState(null); // To store user profile data
  const [error, setError] = useState(null); // To handle errors

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a login request (if the API requires login first)
      const loginResponse = await axios.post(
        "http://localhost:8000/api/v1/login",
        {
          username: form.username,
          password: form.password,
        }
      );

      // Assume loginResponse contains a token or success message
      console.log("Login successful", loginResponse.data);

      // Fetch user profile after successful login
      const profileResponse = await axios.get(
        "http://localhost:8000/api/v1/user/profile",
        {
          headers: {
            Authorization: `Bearer ${loginResponse.data.token}`, // Include token if required
          },
        }
      );

      setUserProfile(profileResponse.data); // Save profile data
      setError(null); // Clear previous errors
    } catch (err) {
      console.error("Error logging in or fetching profile:", err);
      setError("Login failed or unable to fetch profile.");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registering with", form.email);
  };

  return (
    <div className="auth-container">
      <div className="form-box login-box">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username or email address</label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
          <p>Lost your password?</p>
        </form>
      </div>

      <div className="form-box register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>

      {/* Display user profile data if available */}
      {userProfile && (
        <div className="profile-box">
          <h2>User Profile</h2>
          <p>
            <strong>Name:</strong> {userProfile.name}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p>
            <strong>Username:</strong> {userProfile.username}
          </p>
          {/* Add more fields based on the API response */}
        </div>
      )}
    </div>
  );
};

export default LoginUser;
