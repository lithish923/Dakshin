import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; 

const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const role = location.state?.role || "Company"; // Default to "Company"

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);  // Go back if there is history
        } else {
            navigate("/");  // Otherwise, go to homepage
        }
    };

    const handleLogin = (e) => {
      e.preventDefault();
      if (username === "admin" && password === "password") { // Change this logic as needed
          navigate("/dashboard");
      } else {
          alert("Invalid Credentials!");
      }
  };

    return (
      <div className="login2-container-2">
        <div className="header">
          <button className="back-button" onClick={handleBack}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h1 className="title">Login as {role}</h1>
        </div>
        
        <div className="login2-card">
          <form className="login2-form">
            <div className="form-group">
              <label htmlFor="username">Username Or Email</label>
              <input
                type="text"
                id="username"
                className="input-field"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="input-field"
              />
            </div>
            
            <div className="forgot-password">
              <a href="forget" className="forgot-link">
                Forgot Password?
              </a>
            </div>
            
            <button type="submit" className="login2-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
};

export default LoginPage;
