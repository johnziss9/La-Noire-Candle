import React from 'react';
import './AboutSection.css';
import BannerImg from "../../images/candle.png";

function About() {
    return (
        <div className='about-section-container'>
            <div className='about-section-image-container'>
                <img className="about-section-image" src={BannerImg} alt="Banner" />
            </div>
            <div className='about-section-content'>
                <div className='about-section-title'>Meet the Artisans Behind the Flame</div>
                <div className='about-section-text'>
                    <p>Discover the passion and craftsmanship that defines LaNoire Candle. From our serene workshop in Cyprus, we meticulously craft each luxury soy candle by hand, combining nature-inspired fragrances with eco-conscious values. Every flicker tells our story of dedication to quality and sensory excellence.</p>
                </div>
                <a href="/about" className='about-section-button'>Our Story</a>
            </div>
        </div>
    );
}

export default About;