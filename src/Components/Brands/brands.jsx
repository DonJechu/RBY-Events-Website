import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Work from '../Work/work';
import './brand.css'
import brands from '../../assests/spreen.png'
import brands1 from '../../assests/hasvik.png'
import brands2 from '../../assests/sparta365.png'
import brands3 from '../../assests/beem_gaming.png'
import brands4 from '../../assests/nacho.png'
import brands5 from '../../assests/dagar.jpg'


const Brands = () => {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2150,
        dots: true,
        centerMode: true, // Enable center mode
        centerPadding: '0', // Set center padding to 0 for full-width dots
    };

    return (
        <div className="main-brand">
        <div className="wrapper">
            <Slider {...sliderSettings} className="my-slider">
            <a 
                href="https://www.youtube.com/@Spreen" target="_blank" class="footer-links"><img src={brands} alt="" className="brand-image"/>
            </a>

            <a 
                href="https://www.youtube.com/@HasvikGG" target="_blank" class="footer-links"><img src={brands1} alt="" className="brand-image"/>
            </a>

            <a 
                href="https://www.youtube.com/@Sparta356" target="_blank" class="footer-links"><img src={brands2} alt="" className="brand-image"/>
            </a>

            <a 
                href="https://twitter.com/MatthewBeem" target="_blank" class="footer-links"><img src={brands3} alt="" className="brand-image"/>
            </a>

            <a 
                href="https://www.youtube.com/@nacho-minecraft" target="_blank" class="footer-links"><img src={brands4} alt="" className="brand-image"/>
            </a>

            <a 
                href="https://www.youtube.com/@dagar-minecraft" target="_blank" class="footer-links"><img src={brands5} alt="" className="brand-image"/>
            </a>

            </Slider>
        </div>
        </div>
    );
};

export default Brands;
