import React, { useState, useEffect } from 'react';
import './statistics.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

import { AiOutlineRight } from "react-icons/ai";
import Work from '../Work/work';
function Statistics() {
    useEffect(() => {
        AOS.init({
            // duration: 1000, // Adjust the animation duration as needed
            // once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
            setCounter1((prevCounter) => (prevCounter < 50 ? prevCounter + 5 : 50));
        }, 100);

        const interval2 = setInterval(() => {
            setCounter2((prevCounter) => (prevCounter < 30 ? prevCounter + 5 : 30));
        }, 150);

        const interval3 = setInterval(() => {
            setCounter3((prevCounter) => (prevCounter < 1 ? prevCounter + 5 : 1));
        }, 200);

        const interval4 = setInterval(() => {
            setCounter4((prevCounter) => (prevCounter < 800 ? prevCounter + 85 : 800));
        },120);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
        };
    }, []);

    return (

        <>
            <div className="main-statistics">
                <div style={{ display: 'flex', justifyContent: 'center' }} className='views-div'>
                    <div className="filled-text">{counter1}M
                        <p>Views on Youtube</p>
                    </div>
                    <div className="filled-text">{counter2}M
                        <p>Satisfied customers</p>
                    </div>
                    <div className="filled-text">{counter3}M
                        <p>Likes on YouTube</p>
                    </div>
                    <div className="filled-text">{counter4}k
                        <p>Watch-time Hours </p>
                    </div>
                </div>
                <div className="outlined-text">We've Generated</div>


                <div className='text-btn-div '
                    data-aos="fade-up" duration='2000'>
                    <div className='text-div'>
                        <h2>Ready To Start? </h2>
                    </div>
                        <a href="http://discord.rby.events/" target="_blank" rel="noopener noreferrer" className='btn-div'>
                            <button className='ready-to-start'>
                                <p>Let's chat</p>
                                <AiOutlineRight className='left-icon' />
                            </button>
                        </a>

                </div>



            </div>

            <Work />
        </>
    );
}

export default Statistics;
