import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Category_dealer.css";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Sidebar from "../components/Sidebar-dealer.jsx";

const ProductsPage = () => {
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState(false);
    const [currentDate, setCurrentDate] = useState("");

    // Redirect to category pages
    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
            const today = new Date();
            const formattedDate = today.toLocaleDateString("en-GB"); // "DD/MM/YYYY"
            setCurrentDate(formattedDate);
        }, []);

    return (
        <div className="products-container">
            <div className="products-header">
                <button className="menu-button" onClick={() => setMenuOpen(true)}>
                    <IoMenu size={30} color="white" />
                </button>
                <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                <span className="date">{currentDate}</span>
                <IoCartOutline size={30} color="white" className="cart-icon" />
            </div>

            <div className="category-list">
                <button className="category-item" onClick={() => handleCategoryClick("category1")}>
                    CATEGORY 1 <span className="arrow">→</span>
                </button>
                <button className="category-item" onClick={() => handleCategoryClick("category2")}>
                    CATEGORY 2 <span className="arrow">→</span>
                </button>
                <button className="category-item" onClick={() => handleCategoryClick("category3")}>
                    CATEGORY 3 <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;
