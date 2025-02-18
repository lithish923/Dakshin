import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar_dealer.css";

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
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
                <nav className="sidebar-options">
                    <Link to="/dealer_dashboard" className="menu-item">Dashboard</Link>
                    <Link to="/dealer_category" className="menu-item">Products</Link>
                </nav>
                <button className="logout">Log Out</button>
            </div>
        </div>
    );
};

export default Sidebar;
