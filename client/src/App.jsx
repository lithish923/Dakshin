import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"; // Import the Login page
import ForgotPassword from "./pages/ForgetPassword"; 

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget" element={<ForgotPassword />} /> {/* Add Login route */}
      </Routes>
  );
}

export default App;
