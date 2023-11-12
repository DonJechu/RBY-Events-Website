import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './brand.css'
import brands from '../../assests/download-removebg-preview.png'
const Brands = () => {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        centerMode: true, // Enable center mode
        centerPadding: '0', // Set center padding to 0 for full-width dots
    };

    return (
        <div className="main-brand">
        <div className="wrapper">
            <Slider {...sliderSettings} className="my-slider">
                <div>
                    <img src={brands} alt="" />
                </div>
                <div>
                    <img src={brands} alt="" />
                </div>
                <div>
                    <img src={brands} alt="" />
                </div>
                <div>
                    <img src={brands} alt="" />
                </div>
                <div>
                    <img src={brands} alt="" />
                </div>

            </Slider>
        </div>
        </div>
    );
};

export default Brands;
