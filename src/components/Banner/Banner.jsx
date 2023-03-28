import React from 'react';
import './Banner.css';
import BannerImg from "../../images/newbanner.jpeg";

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-image-panel'>
                <img className="banner-image" src={BannerImg} alt="Banner" />
            </div>
        </div>
    );
}

export default Banner;
