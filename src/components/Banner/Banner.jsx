import React from 'react';
import './Banner.css';
import BannerImg from "../../images/testbanner2.png";

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-image-panel'>
                <img className="banner-image" src={BannerImg} alt="Banner" />
                <div className="banner-overlay"></div>
            </div>
        </div>
    );
}

export default Banner;
