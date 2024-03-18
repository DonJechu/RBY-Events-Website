import { TbSwords } from 'react-icons/tb';
import '../../App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles


function Service() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Adjust the animation duration as needed
            //   once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    return (
        <>
            <section id='service'>
                <div className='head-service'><h1>Services</h1></div>
                <div className=" row " >

                    <div className='service-div' data-aos="fade-up"  >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>Full Event Development </p>
                        </div>

                    </div>

                    <div className='service-div2' data-aos="fade-up"  >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>3D Modeling </p>
                            <h2 className='favorite'>Client Favorite</h2>
                        </div>

                    </div>

                    <div className='service-div' data-aos="fade-up" >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>Plugin Development </p>
                        </div>

                    </div>

                    <div className='service-div' data-aos="fade-up"  >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>Datapack Development  </p>
                        </div>

                    </div>

                    <div className='service-div' data-aos="fade-up" >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>Creative Direction </p>
                        </div>

                    </div>

                    <div className='service-div' data-aos="fade-up"  >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>Map Creation </p>
                        </div>

                    </div>

                    <div className='service-div' data-aos="fade-up" >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>System Administration </p>
                        </div>

                    </div>

                    <div className='service-div' data-aos="fade-up">
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>In-Game cinematics  </p>
                        </div>

                    </div>

                    <div className='service-div' data-aos="fade-up" >
                        <div>
                            <TbSwords className='m-auto   icon' /></div>
                        <div>
                            <p>Server Setups  </p>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Service;
