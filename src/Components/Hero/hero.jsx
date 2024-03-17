import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';
import Brands from '../Brands/brands';
import Service from '../Services/services';
import Statistics from '../Statistics/statistics';

function HeroSection() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section>
                <div className="main-hero">
                    <div>
                        <h1 className='hero-heading' data-aos="fade-up" duration='2000'>
                            Organize, Create, <h1 data-aos="fade-up" duration='5000'> Inspire </h1>
                        </h1>
                        <p className='hero-para' duration='40000' data-aos='fade-up'>Mastering the art of conceptualizing, coordinating, and bringing projects to life, I thrive on creating moments that spark awe. Together, let's craft some digital wonders!</p>
                    </div>
                    <div className='btn-div'>
                        <div>
                            <Link to='/portfolio'>
                                <button className="c-button c-button--gooey portfolio-btn">
                                    Portfolio
                                    <div className="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to='/products'>
                                <button className="c-button c-button--gooey products-btn">
                                    Products
                                    <div className="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <a href="http://discord.rby.events/" target="_blank" rel="noopener noreferrer">
                                <button className="c-button c-button--gooey hire-btn">
                                    Hire a freelancer
                                    <div className="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="main-brand-div">
                        <div data-aos="fade-right" duration='2000' className='brandd-2'>
                            <h2 className='brandd-head-2'>FOR CREATORS </h2>
                            <p className='brand-para'>Boost your Content Impact</p>
                        </div>
                        <div className='brandd' data-aos="fade-left" duration='2000'>
                            <h2 className='brandd-head'>FOR BRANDS </h2>
                            <p className='brand-para'>Tap into Gaming Audience</p>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <Statistics />
                <Service />
                <Brands />
                <Footer />
            </div>
        </>
    );
}

export default HeroSection;
