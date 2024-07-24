import React from 'react';
import '../../Assets/css/Admin.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
             <input type="text" placeholder="Search brands" className="search-input" />
                <button className="search-button"><FaSearch /></button>
            <div className="user-info">
                <img src="https://via.placeholder.com/30" alt="User" />
                <span>User Name</span>
            </div>
        </div>
    );
}

export default Navbar;
