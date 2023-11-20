import './work.css'
import React, { useEffect } from 'react';
import work from '../../assests/work.png'
import work2 from '../../assests/work2.jpg'
import work3 from '../../assests/work3.png'
import work4 from '../../assests/work4.png'

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
                            <img src={work2} alt="work2" />
                        </div>
                        <div>
                            <img src={work3} alt="work3" />
                        </div>
                        <div>
                            <img src={work4} alt="work4" />
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
