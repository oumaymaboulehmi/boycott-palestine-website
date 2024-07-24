import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Assets/css/Dashboard.css';

const Sidebar = () => {
    const [productsMenuOpen, setProductsMenuOpen] = useState(false);
    const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

    const toggleProductsMenu = () => {
        setProductsMenuOpen(!productsMenuOpen);
    };

    const toggleCategoriesMenu = () => {
        setCategoriesMenuOpen(!categoriesMenuOpen);
    };

    return (
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <nav>
                <ul>
                    <li><NavLink to="/admin/">Dashboard</NavLink></li>
                    <li>
                        <span className="menu-toggle" onClick={toggleProductsMenu}>Products</span>
                        <ul className={productsMenuOpen ? "submenu open" : "submenu"}>
                            <li><NavLink to="/admin/products/add">Add Product</NavLink></li>
                            <li><NavLink to="/admin/products/list">Product List</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <span className="menu-toggle" onClick={toggleCategoriesMenu}>Categories</span>
                        <ul className={categoriesMenuOpen ? "submenu open" : "submenu"}>
                            <li><NavLink to="/admin/categories/add">Add Category</NavLink></li>
                            <li><NavLink to="/admin/categories/list">Category List</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/admin/reviews">Reviews</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;