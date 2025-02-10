import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import "../styles/Navbar.css";
import UseStateLogin from "./UseStateLogin";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [model, setModel] = useState(false);
    const handleLogin = () => {
      setModel(true);
    };
    const closeform = () => {
        setModel(false); 
    }
    return (
        <>
            <div className="Navbar">
            { model && <UseStateLogin closeform={closeform} /> }

                <div className="logo">Botiga</div>
               
                <button><span>All categories</span></button>
                <input type="text" placeholder="search product..." />
                <div className="nav-icons">
                  <AiOutlineUser className="nav-icon" onClick={handleLogin} />
                    <CiShoppingCart className="nav-icon" />
                    <FaRegHeart className="nav-icon" />
                   
                    <FaBars 
                        className="menu-toggle" 
                        onClick={() => setMenuOpen(true)} 
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
             
                <FaTimes 
                    className="menu-close" 
                    onClick={() => setMenuOpen(false)} 
                />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/vendor">Vendors</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            {/* Regular Navbar for Large Screens */}
            <div className="header">
                <div className="title">Trending categories</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/vendor">Vendors</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="call">
                    <FaPhoneAlt className="call-icon" /> 800-345-1234
                </div>
            </div>
        </>
    );
}

export default Navbar;
