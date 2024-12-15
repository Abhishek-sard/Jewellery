import React, { useState } from "react";
import axios from "axios";
import "./LoginUser.css";

const LoginUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    date_of_birth: "",
    password: "",
    confirm_password: "",
  });
  const [loginForm, setLoginForm] = useState({
    mobile: "",
    password: "",
  });

  const [userProfile, setUserProfile] = useState(null); // To store user profile data
  const [error, setError] = useState(null); // To handle errors
  const [successMessage, setSuccessMessage] = useState(null); // To display success messages

  // Handle Registration
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/register",
        {
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          date_of_birth: form.date_of_birth,
          password: form.password,
          confirm_password: form.confirm_password,
        }
      );

      console.log("Registration successful:", response.data);
      setSuccessMessage("Registration successful! Please log in.");
      setError(null);
    } catch (err) {
      console.error("Registration error:", err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
      setSuccessMessage(null);
    }
  };

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
      <div className="form-box register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="date_of_birth">Date of Birth</label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={form.date_of_birth}
              onChange={(e) =>
                setForm({ ...form, date_of_birth: e.target.value })
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={form.confirm_password}
              onChange={(e) =>
                setForm({ ...form, confirm_password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Register</button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>

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

export default LoginUser;
