import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2"; // Import Pie chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/Dashboard_company.css";
import Sidebar from "../components/Sidebar-dealer.jsx";

import { IoMenu, IoCalendarOutline } from "react-icons/io5";
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState(false);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString("en-GB"); // "DD/MM/YYYY"
        setCurrentDate(formattedDate);
    }, []);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    // Dummy data for the pie chart
    const data = {
        labels: ["Dealer A", "Dealer B", "Dealer C", "Dealer D", "Dealer E"],
        datasets: [
            {
                label: "Sales Distribution",
                data: [20, 25, 15, 30, 10], // Example percentages
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right",
            },
            title: {
                display: true,
                text: "Sales Distribution by Dealers",
            },
        },
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <button className="menu-button" onClick={() => setMenuOpen(true)}>
                    <IoMenu size={30} color="white" />
                </button>
                <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                <span className="date">{currentDate}</span>
            </div>

            <div className="toggle-buttons">
                <button className="calendar">
                    <IoCalendarOutline size={30} color="black" />
                </button>
                <div className="toggle-container">
                    <button className={`toggle-option ${!isToggled ? "active" : ""}`} onClick={() => setIsToggled(false)}>MONTHLY</button>
                    <button className="toggle" onClick={handleToggle}>
                        {isToggled ? <MdOutlineToggleOn size={30} color="black" /> : <MdOutlineToggleOff size={30} color="black" />}
                    </button>
                    <button className={`toggle-option ${isToggled ? "active" : ""}`} onClick={() => setIsToggled(true)}>YEARLY</button>
                </div>
            </div>

            <div className="revenue-container">
                <button className="revenue-box">
                    TOTAL PURCHASE <br />
                    <span className="revenue-amount">45000</span>
                </button>
            </div>

            <div className="stats-container">
                <div className="stat-box">TOTAL ORDERS <br /><span className="totalorders">10</span></div>
                <div className="stat-box">COMPLETED ORDERS <br /><span className="completedorders">6</span></div>
                <div className="stat-box">ON PROGRESS <br /><span className="onprogress">2</span></div>
            </div>

            <div className="stats-container">
                <div className="payment-box">TOTAL PAYMENTS <br /><span>10</span></div>
                <div className="payment-box">COMPLETED PAYMENTS <br /><span>4</span></div>
                <div className="payment-box">PENDING PAYMENTS <br /><span>6</span></div>
            </div>

            {/* Pie Chart */}
            <div className="chart-container">
                <h3>TOTAL SALES BY DEALERS</h3>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;
