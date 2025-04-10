import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import '../../styles.css';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Products() {
    const { category } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    const productData = {
        'candles': [
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
        ],
        'diffusers': [
            {
                id: 1,
                name: "Midnight Forest",
                description: "Rich pine and cedar with hints of smoky amber",
                price: "€32.00",
                image: "https://www.rebelaromas.co.uk/cdn/shop/files/ombreleatherdupeinspiredreeddiffuser.png?v=1727548941&width=5000"
            },
            {
                id: 2,
                name: "Vanilla Orchid",
                description: "Luxurious vanilla bean infused with exotic orchid",
                price: "€30.00",
                image: "https://www.rebelaromas.co.uk/cdn/shop/files/ombreleatherdupeinspiredreeddiffuser.png?v=1727548941&width=5000"
            },
            {
                id: 3,
                name: "Mediterranean Breeze",
                description: "Fresh citrus with sea salt and coastal herbs",
                price: "€34.00",
                image: "https://www.rebelaromas.co.uk/cdn/shop/files/ombreleatherdupeinspiredreeddiffuser.png?v=1727548941&width=5000"
            },
            {
                id: 4,
                name: "Lavender Fields",
                description: "Calming lavender with subtle notes of bergamot",
                price: "€32.00",
                image: "https://www.rebelaromas.co.uk/cdn/shop/files/ombreleatherdupeinspiredreeddiffuser.png?v=1727548941&width=5000"
            },
            {
                id: 5,
                name: "Amber & Tonka",
                description: "Warm amber and rich tonka bean with vanilla",
                price: "€36.00",
                image: "https://www.rebelaromas.co.uk/cdn/shop/files/ombreleatherdupeinspiredreeddiffuser.png?v=1727548941&width=5000"
            },
            {
                id: 6,
                name: "Fig & Cashmere",
                description: "Sweet fig and warm cashmere with a hint of coconut",
                price: "€34.00",
                image: "https://www.rebelaromas.co.uk/cdn/shop/files/ombreleatherdupeinspiredreeddiffuser.png?v=1727548941&width=5000"
            }
        ],
        'air-fresheners': [
            {
                id: 1,
                name: "Midnight Forest",
                description: "Rich pine and cedar with hints of smoky amber",
                price: "€32.00",
                image: "https://cdn.datadirectory.co.uk/images/500/mob-mo6206_brown.png"
            },
            {
                id: 2,
                name: "Vanilla Orchid",
                description: "Luxurious vanilla bean infused with exotic orchid",
                price: "€30.00",
                image: "https://cdn.datadirectory.co.uk/images/500/mob-mo6206_brown.png"
            },
            {
                id: 3,
                name: "Mediterranean Breeze",
                description: "Fresh citrus with sea salt and coastal herbs",
                price: "€34.00",
                image: "https://cdn.datadirectory.co.uk/images/500/mob-mo6206_brown.png"
            },
            {
                id: 4,
                name: "Lavender Fields",
                description: "Calming lavender with subtle notes of bergamot",
                price: "€32.00",
                image: "https://cdn.datadirectory.co.uk/images/500/mob-mo6206_brown.png"
            },
            {
                id: 5,
                name: "Amber & Tonka",
                description: "Warm amber and rich tonka bean with vanilla",
                price: "€36.00",
                image: "https://cdn.datadirectory.co.uk/images/500/mob-mo6206_brown.png"
            },
            {
                id: 6,
                name: "Fig & Cashmere",
                description: "Sweet fig and warm cashmere with a hint of coconut",
                price: "€34.00",
                image: "https://cdn.datadirectory.co.uk/images/500/mob-mo6206_brown.png"
            }
        ]
    }

    const categoryTitles = {
        'candles': "Luxury Soy Candles",
        'diffusers': "Premium Reed Diffusers",
        'air-fresheners': "Luxury Car Fragrances",
        'default': "Our Collection"
    };

    const categoryDescriptions = {
        'candles': "Handcrafted luxury candles made with 100% natural soy wax",
        'diffusers': "Long-lasting reed diffusers for continuous fragrance",
        'air-fresheners': "Elegant bottle diffusers that add both scent and style to your vehicle",
        'default': "Luxury home fragrances for every space"
    };

    // Get normalized category key
    const getNormalizedCategoryKey = (cat) => {
        if (!cat) return 'candles'; // Default to candles
        
        // Check against available keys
        if (productData[cat]) return cat;
        
        // Handle alternative formats
        if (cat === 'airfresheners' || cat === 'air-fresheners' || cat === 'air fresheners') 
            return 'air-fresheners';
            
        return null; // Category not found
    };

    const normalizedCategory = getNormalizedCategoryKey(category);
    const products = normalizedCategory ? productData[normalizedCategory] || [] : productData['candles'];
    const pageTitle = normalizedCategory ? categoryTitles[normalizedCategory] || categoryTitles['default'] : categoryTitles['default'];
    const pageDescription = normalizedCategory ? categoryDescriptions[normalizedCategory] || categoryDescriptions['default'] : categoryDescriptions['default'];

    return (
        <>
            <div className='header'>
                <LogoHeader />
                <Navbar />
            </div>
            <div className='products-container'>
                <div className='products-content'>
                    <div className='products-header'>
                        <h1>{pageTitle}</h1>
                        <p className='products-subheading'>{pageDescription}</p>
                    </div>
                    
                    <div className='products-grid'>
                        {products && products.length > 0 ? (
                            products.map(product => (
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
                            ))
                        ) : (
                            <div className="no-products-message">
                                <p>No products found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;