import React, { useState } from 'react';
import './Product.css';

function Product(props) {
    const reverse = props.reverse;

    return (
        <>
            {!reverse ?
                <div className='product-container'>
                    <div className='product-image-container'>
                        <img className="product-image" src={props.src} alt={props.alt} />
                    </div>
                    <div className='product-text-container'>
                        <div className='product-text'>
                            {props.text}
                        </div>
                    </div>
                </div> :
                <div className='product-container'>
                    <div className='product-text-container'>
                        <div className='product-text'>
                            {props.text}
                        </div>
                    </div>
                    <div className='product-image-container'>
                        <img className="product-image" src={props.src} alt={props.alt} />
                    </div>
                </div>
                }
        </>
    );
}

export default Product;
