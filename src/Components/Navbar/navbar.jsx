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
                                Home
                            </NavLink>
                        </li>
                        <li>
                            {/* Utilizamos href con el identificador de la sección */}
                            <a href="#service" onClick={handleShowNavbar}>
                                Services
                            </a>
                        </li>
                        <li>
                            <NavLink to="/portfolio/3d" onClick={handleShowNavbar}>
                                3D Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio/server
                            " onClick={handleShowNavbar}>
                                Server Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products
                            " onClick={handleShowNavbar}>
                                Products
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
