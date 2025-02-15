import React from "react";
import "../styles/LoginPage.css"; 

const LoginPage = () => {
    return (
      <div className="login-container-2">
        <div className="header">
          <button className="back-button">
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
          
          <h1 className="title">Login</h1>
        </div>
        
        <div className="login-card">
          <form className="login-form">
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
              <a href="#" className="forgot-link">
                Forgot Password?
              </a>
            </div>
            
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;