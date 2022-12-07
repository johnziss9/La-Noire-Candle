import React from 'react';
import './Banner.css';

function Banner(props) {
    return (
        <div className='banner-container'>
            <div className='banner-image-panel'>
                <img className="banner-image" src={props.src} alt={props.alt} />
            </div>
        </div>
    );
}

export default Banner;
