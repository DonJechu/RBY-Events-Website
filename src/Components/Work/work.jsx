import './work.css'
import React, { useEffect } from 'react';
import work from '../../assests/work.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

import { AiOutlineRight } from "react-icons/ai";
function Work() {
    useEffect(() => {
        AOS.init({
            // duration: 1000, // Adjust the animation duration as needed
            // once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    return (
        <>
            <section id='work'>           <div className="main-work-div">
                <div className='work-head'>
                    <h2 className="work-head">OUR WORK </h2>
                </div>
                <div className='work-img'>
                    <div className="grid-container">
                        <div>
                            <img src={work} alt="work" />
                        </div>
                        <div>
                            <img src={work} alt="work" />
                        </div>
                        <div>
                            <img src={work} alt="work" />
                        </div>
                        <div>
                            <img src={work} alt="work" />
                        </div>
                    </div>
                </div>
                <div className="work-btn-div">
                    <button className=' work-btn'>
                        <p>All Case Studies </p>
                        <AiOutlineRight className='left-icon' />
                    </button>
                </div>
            </div>
            </section>



        </>
    )
}
export default Work 