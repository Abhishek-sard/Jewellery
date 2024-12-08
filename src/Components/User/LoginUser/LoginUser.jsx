import React, { useState } from "react";
import './LoginUser.css'

const LoginUser = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", form.username, form.password);
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
            <p>A link to set a new password will be sent to your email address.</p>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
