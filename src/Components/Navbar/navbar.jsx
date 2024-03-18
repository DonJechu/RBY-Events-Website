import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'
import Hamburger from './hamburger';
import Logo from '../../assests/logo.png';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    {/* Envolvemos la imagen del logo con NavLink */}
                    <NavLink to="/" onClick={handleShowNavbar}>
                        <img src={Logo} alt="" className="logo-img" />
                    </NavLink>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li>
                            {/* Ajusta las rutas según tus necesidades */}
                            <NavLink to="/" onClick={handleShowNavbar}>
                                <span className="nav-item">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            {/* Utilizamos href con el identificador de la sección */}
                            <a href="#service" onClick={handleShowNavbar}>
                                <span className="nav-item">Services</span>
                            </a>
                        </li>
                        <li>
                            <NavLink to="/portfolio" onClick={handleShowNavbar}>
                                <span className="nav-item">Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" onClick={handleShowNavbar}>
                                <span className="nav-item">Products</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
