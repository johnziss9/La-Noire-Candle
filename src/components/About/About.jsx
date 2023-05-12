import React from 'react';
import './About.css';

// This component is not a React.forwardRef component 
// so it doesn't know what to do with the ref prop
// which is why to pass the ref correctly to the div element, 
// we need to use the second argument of the function component.
function About(props, ref) {
    return (
        <div className='about-container' ref={ref}>
            <div className='about-title'>About Us</div>
            <div className='about-text'>
                <p>LaNoire Candle is a luxury home fragrance brand that is based in Cyprus. Established in 2019, we take pride in our commitment to crafting high-quality, hand-poured candles that are made using natural soy wax. Our passion for excellence is reflected in every product that we create, and we strive to deliver a unique and indulgent experience to our customers through the art of fragrance.</p>

                <p>At LaNoire Candle, we place great emphasis on creating products that are not only luxurious but also eco-friendly. All of our products are lovingly crafted in a clean and serene environment, using only the finest ingredients and materials. We take great care in the creation of each candle, from the selection of the fragrance oils to the hand-pouring process, to ensure that every candle we produce is of the highest quality.</p>

                <p>Our scent selection includes mostly nature-like and flower scents, carefully curated to create a warm and inviting atmosphere that soothes both the soul and the mind. Whether you're looking to unwind after a long day or create an inviting ambiance for your home, LaNoire Candle has a fragrance that will suit your needs.</p>

                <p>Overall, we are passionate about delivering exceptional products that delight the senses and enhance the ambiance of any space. At LaNoire Candle, we believe that the power of fragrance can transform any moment into a luxurious experience, and we invite you to indulge in the art of fragrance with us.</p>
            </div>
        </div>
    );
}

export default React.forwardRef(About);