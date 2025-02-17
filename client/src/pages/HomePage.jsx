import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/HomePage.css"; 

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = (role) => {
    navigate("/login", { state: { role } });  // Pass role as state
  };

  return (
    <div className="login-container">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="Dakshin Logo" className="logo" />
      </div>

      {/* Text Content */}
      <div className="text-section">
        <h1 className="welcome-text">Welcome</h1>
        <p className="manage-text">Manage Your Dealership</p>
        <p className="subtext">Seamlessly and Intuitively</p>
      </div>

      {/* Login Options */}
      <div className="login-options">
        <p className="login-text">LOGIN AS</p>
        <div className="button-group">
          <button className="login-button" onClick={() => handleLoginClick("Company")}>
            COMPANY
          </button>
          <button className="login-button" onClick={() => handleLoginClick("Dealer")}>
            DEALER
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
