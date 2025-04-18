import React from 'react';
import Product from '../Product/Product';
import './ProductSection.css';
import CandleImg from "../../images/candle.png";
import AirFreshnerImg from "../../images/airfreshner.png";
import DefuserImg from "../../images/defuser.png";
import { Link } from 'react-router-dom';

function ProductSection() {
    return (
        <div className='product-section-container'>
            <div className='product-section-title'>Our Products</div>
            <div className='product-section-items-container'>
                <Link className='candles-link' to='/products/candles'>
                    <Product reverse={false} src={CandleImg} alt="Candle Image" imgTitle="CANDLES" text="For our candles we have chosen to use natural soy wax as the main ingredient. This sustainable alternative to traditional paraffin wax is a renewable resource that burns cleaner and longer, producing less soot and providing a more environmentally friendly option for our customers. We have a great selection of scents to pick from including Vanilla, Rose & Patchouli, Jasmine, Cashmere, Black Vanilla, Black Orchid, Black Coconut and Baby Powder." />
                </Link>
                <Link className='diffusers-link' to='/products/diffusers'>
                    <Product reverse={true} src={DefuserImg} alt="Diffuser Image" imgTitle="DIFFUSERS" text="A collection of long-lasting, alcohol-free luxury reed diffusers designs to match you candles with their looks and their scents. Using pure fragrances, our bamboo reeds soak up to diffuse and add a beautiful scent to your home or office lasting up to 4-6 months." />
                </Link>
                <Link className='air-fresheners-link' to='/products/air-fresheners'>
                    <Product reverse={false} src={AirFreshnerImg} alt="Air Freshener Image" imgTitle="AIR FRESHENERS" text="Introducing our long-lasting luxury car air fresheners, alcohol-free and expertly infused with pure fragrances. Our car fresheners are a perfect essential for your car lasting up-to 4-5 weeks which will let you take your favourite scent with you wherever you go, transforming any car ride into a relaxing and refreshing experience. The a wooden lid, a styling look and 5 different scents." />
                </Link>
            </div>
        </div>
    );
}

export default ProductSection;
