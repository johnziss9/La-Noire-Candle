import React from 'react';
import './Products.css';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Item from '../../components/Item/Item';

function Products() {
    return (
        <div className='products-container'>
            <div>
                <LogoHeader />
                <Navbar />
            </div>
            <div className='items-container'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
}

export default Products;