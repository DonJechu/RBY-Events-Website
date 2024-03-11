import React from "react";
import "./footer.css"; // Import your stylesheet here

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles


const Footer = () => {
    useEffect(() => {
        AOS.init({
            // duration: 1000, // Adjust the animation duration as needed
            // once: true, // Set to true if you want the animation to occur only once
        });
    }, []);

    return (
<footer className="footer-sec">
    <div className="main">
        <div className="logo row" data-aos="fade-right" duration='2000'>
            <div className="footer-header">
                <h2>Talk Today,</h2>
                <h2>Start Tomorrow.</h2>

                <a href="http://discord.rby.events/" target="_blank" rel="noopener noreferrer" className='footer-btn'>
                    <button>
                        <p>Let's chat!</p>
                    </button>
                </a>
            </div>
        </div>

        <div className="link row" data-aos="fade-left" duration='2000'>
            <div className="footer-header">
                <h3>Links</h3>
            </div>
            <div className="link-des">
                <a href="#work" className="footer-links">Work</a>
                <a href="#service" className="footer-links">Services</a>
                <a href="https://twitter.com/RBYevents" target="_blank" className="footer-links">Twitter</a>
                <a href="http://discord.rby.events" target="_blank" className="footer-links">Discord</a>
            </div>
        </div>
    </div>
    <div className="copyright">
        <hr />
        <p>© RBY Events. Made for everyone.</p>
    </div>
</footer>

    );
};

export default Footer;
