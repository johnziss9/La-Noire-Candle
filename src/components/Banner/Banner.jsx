import React from 'react';
import './Banner.css';
import BannerImg from "../../images/banner.jpg";

function Banner() {
    return (
        <div className='banner-container'>
            <div className='banner-image-panel'>
                <img className="banner-image" src={BannerImg} alt="Banner Image" />
            </div>
        </div>
    );
}

export default Banner;
