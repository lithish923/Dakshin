import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard_Dealer.css";

import { IoMenu, IoCalendarOutline } from "react-icons/io5";
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";

const Dashboard = () => {
    const navigate = useNavigate();
    
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString("en-GB"); // "DD/MM/YYYY"
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <button className="menu-button">
                    <IoMenu size={30} color="white" />
                </button>
                <span className="date">{currentDate}</span>
            </div>

            <div className="toggle-buttons">
                <button className="calendar">
                    <IoCalendarOutline size={30} color="black" />
                </button>
                
                <div className="toggle-container">
                    <button 
                        className={`toggle-option ${!isToggled ? "active" : ""}`}
                        onClick={() => setIsToggled(false)}
                    >
                        MONTHLY
                    </button>

                    <button className="toggle" onClick={handleToggle}>
                        {isToggled ? (
                            <MdOutlineToggleOn size={30} color="black" />
                        ) : (
                            <MdOutlineToggleOff size={30} color="black" />
                        )}
                    </button>

                    <button 
                        className={`toggle-option ${isToggled ? "active" : ""}`}
                        onClick={() => setIsToggled(true)}
                    >
                        YEARLY
                    </button>
                </div>
            </div>

            <div className="revenue-container">
                <button className="revenue-box">
                    TOTAL PURCHASES <br />
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

            <div className="chart-container">
                <h3>TOTAL SALES BY DEALERS</h3>
                <img src="/chart.png" alt="Sales Chart" className="chart-image" />
            </div>
        </div>
    );
};

export default Dashboard;
