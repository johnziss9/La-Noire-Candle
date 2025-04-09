import React from 'react';
import './Aspects.css';
import { FaHeart } from 'react-icons/fa';
import { MdEco } from 'react-icons/md';
import { RiStarSLine } from 'react-icons/ri';

function Aspects() {
    return (
        <div className='aspects-container'>
            <div className='aspects-item-content'>
                <div className='aspects-item-icon'>
                    <FaHeart color="#ffffff" size={32} />
                </div>
                <div className='aspects-item-title'>Handcrafted</div>
                <div className='aspects-item-text'>Made by hand using small batches for exceptional quality and attention to detail</div>
            </div>
            <div className='aspects-item-content'>
                <div className='aspects-item-icon'>
                    <MdEco color="#ffffff" size={32} />
                </div>
                <div className='aspects-item-title'>Eco-Friendly</div>
                <div className='aspects-item-text'>100% natural soy wax with premium fragrances for a clean, sustainable burn</div>
            </div>
            <div className='aspects-item-content'>
                <div className='aspects-item-icon'>
                    <RiStarSLine color="#ffffff" size={32} />
                </div>
                <div className='aspects-item-title'>Luxury Experience</div>
                <div className='aspects-item-text'>Premium materials and nature-inspired fragrances that transform any space into a haven of tranquility</div>
            </div>
        </div>
    );
}

export default Aspects;