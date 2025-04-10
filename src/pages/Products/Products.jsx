import React from 'react';
import './Products.css';
import '../../styles.css';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Products() {
    const products = [
        {
            id: 1,
            name: "Midnight Forest",
            description: "Rich pine and cedar with hints of smoky amber",
            price: "€32.00",
            image: "https://www.northumberlandhoney.co.uk/wp-content/uploads/2024/03/Beeswax-Candle-Beeswax-Candles-For-Sale-UK-.jpg"
        },
        {
            id: 2,
            name: "Vanilla Orchid",
            description: "Luxurious vanilla bean infused with exotic orchid",
            price: "€30.00",
            image: "https://www.northumberlandhoney.co.uk/wp-content/uploads/2024/03/Beeswax-Candle-Beeswax-Candles-For-Sale-UK-.jpg"
        },
        {
            id: 3,
            name: "Mediterranean Breeze",
            description: "Fresh citrus with sea salt and coastal herbs",
            price: "€34.00",
            image: "https://www.northumberlandhoney.co.uk/wp-content/uploads/2024/03/Beeswax-Candle-Beeswax-Candles-For-Sale-UK-.jpg"
        },
        {
            id: 4,
            name: "Lavender Fields",
            description: "Calming lavender with subtle notes of bergamot",
            price: "€32.00",
            image: "https://www.northumberlandhoney.co.uk/wp-content/uploads/2024/03/Beeswax-Candle-Beeswax-Candles-For-Sale-UK-.jpg"
        },
        {
            id: 5,
            name: "Amber & Tonka",
            description: "Warm amber and rich tonka bean with vanilla",
            price: "€36.00",
            image: "https://www.northumberlandhoney.co.uk/wp-content/uploads/2024/03/Beeswax-Candle-Beeswax-Candles-For-Sale-UK-.jpg"
        },
        {
            id: 6,
            name: "Fig & Cashmere",
            description: "Sweet fig and warm cashmere with a hint of coconut",
            price: "€34.00",
            image: "https://www.northumberlandhoney.co.uk/wp-content/uploads/2024/03/Beeswax-Candle-Beeswax-Candles-For-Sale-UK-.jpg"
        }
    ];

    return (
        <>
            <div className='header'>
                <LogoHeader />
                <Navbar />
            </div>
            <div className='products-container'>
                <div className='products-content'>
                    <div className='products-header'>
                        <h1>Our Collection</h1>
                        <p className='products-subheading'>Handcrafted luxury candles made with 100% natural soy wax</p>
                    </div>
                    
                    <div className='products-grid'>
                        {products.map(product => (
                            <div className='product-card' key={product.id}>
                                <div className='products-image-container'>
                                    <img src={product.image} alt={product.name} className='product-image' />
                                </div>
                                <div className='product-details'>
                                    <h2 className='product-name'>{product.name}</h2>
                                    <p className='product-description'>{product.description}</p>
                                    <p className='product-price'>{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;