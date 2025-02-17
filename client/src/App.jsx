import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"; // Import the Login page
import ForgotPassword from "./pages/ForgetPassword"; 
import Dashboard_company from "./pages/Dashboard-Company";
import Dashboard_Dealer from "./pages/Dashboard-Dealer";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgotPassword />} />
        <Route path="/company_dashboard" element={<Dashboard_company />} />
        <Route path="/dealer_dashboard" element={<Dashboard_Dealer />} /> {/* Add Login route */}
      </Routes>
  );
}

export default App;
