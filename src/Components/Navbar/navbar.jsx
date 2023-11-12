import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'
import Hamburger from './hamburger';
import Logo from '../../assests/logo.png'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" className="logo-img" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li>
                            {/* <NavLink to="/" onClick={handleShowNavbar}> */}
                                Home
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/blogs" onClick={handleShowNavbar}> */}
                                About
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/projects" onClick={handleShowNavbar}> */}
                                Work
                            {/* </NavLink> */}
                        </li>
                        <li>
                            {/* <NavLink to="/about" onClick={handleShowNavbar}> */}
                                Services
                            {/* </NavLink> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
