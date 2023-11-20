import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer';
import Brands from '../Brands/brands';
// import { Analytics } from '@vercel/analytics/react';
import Service from '../Services/services';
import Statistics from '../Statistics/statistics';

function HeroSection() {
    useEffect(() => {
        AOS.init({
            // duration: 1000, // Adjust the animation duration as needed
            // once: true, // Set to true if you want the animation to occur only once
        });
    }, []);



    return (
        <>
            <section >
                <div className="main-hero">
                    <div>
                        <h1 className=' hero-heading ' data-aos="fade-up" duration='2000' >
                            Organize, Create, <h1 data-aos="fade-up" duration='5000' > Inspire </h1>
                        </h1>
                        <p className='hero-para' duration='40000' data-aos='fade-up'>Mastering the art of conceptualizing, coordinating, and bringing projects to life, I thrive on creating moments that spark awe. Together, let's craft some digital wonders!</p>
                    </div>
                    <div className='btn-div'>
                        <div>
                            {/* <a href="http://discord.rby.events/" target="_blank" rel="noopener noreferrer"> */}

                            <Link to='/resume'>
                                <button class="c-button c-button--gooey">
                                    Portfolio
                                    <div class="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                            </Link>
                            {/* </a> */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'blocl', height: "0", width: '0' }}>
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        <div>
                            <a href="http://discord.rby.events/" target="_blank" rel="noopener noreferrer">
                                <button class="c-button c-button--gooey">
                                    Hire a freelancer
                                    <div class="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: "0", width: '0' }}>
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>


                    <div className="main-brand-div">
                        <div
                            data-aos="fade-right" duration='2000'
                            className='brandd-2'>
                            <h2 className='brandd-head-2'>FOR CREATORS </h2>
                            <p className='brand-para'>
                                Boost your Content Impact
                            </p>
                        </div>
                        <div className='brandd'
                            data-aos="fade-left" duration='2000'
                        >
                            <h2 className='brandd-head'>FOR BRANDS </h2>
                            <p className='brand-para'>
                                Tap into Gaming Audience
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <div>

                <Statistics />
                <Service />

                {/* <Analytics /> */}

                <Brands />

                <Footer />

            </div>
        </>

    );
}

export default HeroSection;
