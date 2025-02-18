import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Category_dealer.css";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const ProductsPage = () => {
    const navigate = useNavigate();

    // Redirect to category pages
    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    return (
        <div className="products-container">
            <div className="products-header">
                <button className="menu-button">
                    <IoMenu size={30} color="white" />
                </button>
                <span className="date">25/07/2024</span>
                <IoCartOutline size={30} color="black" className="cart-icon" />
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
