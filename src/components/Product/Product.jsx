import React, { useState } from 'react';
import './Product.css';

function Product(props) {
    // const [reverse, setReverse] = useState(false);
    const reverse = props.reverse;

    return (
        <div className='product-container'>
            {!reverse ?
                <>
                    <div className='product-image-panel'>
                        <img className="product-image" src={props.src} alt={props.alt} />
                    </div>
                    <div className='product-text-panel'>
                        <div className='product-text'>
                            {props.text}
                        </div>
                    </div>
                </> :
                <>
                    <div className='product-text-panel'>
                        <div className='product-text'>
                            {props.text}
                        </div>
                    </div>
                    <div className='product-image-panel'>
                        <img className="product-image" src={props.src} alt={props.alt} />
                    </div>
                </>}
        </div>
    );
}

export default Product;
