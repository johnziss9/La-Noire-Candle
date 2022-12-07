import React, { useState } from 'react';
import './Product.css';

function Product(props) {
    const reverse = props.reverse;

    return (
        <div className='product-container'>
            {!reverse ?
                <div className='product-item-container'>
                    <div className='product-image-container'>
                        <img className="product-image" src={props.src} alt={props.alt} />
                    </div>
                    <div className='product-text-container'>
                        <div className='product-text'>
                            {props.text}
                        </div>
                    </div>
                </div> :
                <div className='product-item-container'>
                    <div className='product-text-container'>
                        <div className='product-text'>
                            {props.text}
                        </div>
                    </div>
                    <div className='product-image-container'>
                        <img className="product-image" src={props.src} alt={props.alt} />
                    </div>
                </div>}
        </div>
    );
}

export default Product;
