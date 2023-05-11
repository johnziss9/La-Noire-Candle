import React from 'react';
import './Item.css';
import DemoImg from "../../images/demo-img.png";

function Products() {
    return (
        <div className='item-container'>
            <div className='item-img-container'>
                <img src={DemoImg} className='item-img' />
            </div>
            <div className='item-text-container'>
                <text>Black Orchid</text>
                <text>£7</text>
            </div>
        </div>
    );
}

export default Products;