import React from 'react';
import './Products.css';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Item from '../../components/Item/Item';

function Products(props) {
    return (
        <>
            <div>
                <LogoHeader />
                <Navbar />
            </div>
            <div div className='products-container'>
                <div className='items-text-container'>
                    <div className='sub-page-text'>{props.productsText}</div>
                </div>
                <div className='items-container'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </>
    );
}

export default Products;