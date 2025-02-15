import React, { useState, useEffect } from 'react';
import "../styles/ForgetPassword.css"; 

const ForgotPassword = () => {
  const [timer, setTimer] = useState(30);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const handleResend = () => {
    setTimer(30);
    setIsTimerActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="forgot-password-container">
      <div className="header-section">
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
        
        <div className="header-content">
          <h1 className="main-title">Forgot Password?</h1>
          <p className="subtitle">
            Enter your email address to reset your password.
          </p>
        </div>
        
        <div className="form-card">
          <form onSubmit={handleSubmit} className="reset-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="input-field"
                required
              />
            </div>
            
            <div className="resend-section">
              {timer > 0 ? (
                <span className="timer-text">
                  Resend In : {timer}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="resend-button"
                >
                  Resend OTP
                </button>
              )}
            </div>
            
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;