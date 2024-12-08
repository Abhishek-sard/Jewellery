

import React, { useEffect, useState } from "react";
import "./login.css";
import Logo from "../../assets/Logo-02 (1).png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Slice/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("123456789");
  const [password, setPassword] = useState("admin");
  const [rememberMe, setRememberMe] = useState(false);

  const { isAuthenticated, user, _persist } = useSelector((state) => state.auth); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Wait for rehydration to complete and handle navigation
  useEffect(() => {
    if (_persist?.rehydrated) {
      if (isAuthenticated) {
        if (user?.role_name === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    }
  }, [_persist, isAuthenticated, user, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {identifier:email,password};
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    dispatch(login(data)).then((result) => {
  
      if(result.payload?.token){
        navigate("/admin");
        
          toast.success("Login successfully!")
      closeLogin();
    }else{
      toast.error("Login failed!")
      setEmail("");
      setPassword("");  
    }
  })

   
  }

  // Optional loading state during rehydration
  if (!_persist?.rehydrated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="block">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Company Logo" className="h-12" />
        </div>

        <div className="bg-white p-8 rounded-md shadow-md w-96 border-t-[3px] border-blue-700">
          <div className="card-header">
            <h2 className="text-xl font-bold text-left mb-6">Seller Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 formWrap">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 formWrap">
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="btn w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
