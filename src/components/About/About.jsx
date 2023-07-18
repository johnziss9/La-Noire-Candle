import React from 'react';
import './About.css';
import BannerImg from "../../images/candle.png";

function About() {
    return (
        <div className='about-container'>
            {/* <div className='homepage-title'>A little bit about ourselves...</div> */}
            <div className='about-content'>
                <div className='about-text'>
                    <p>LaNoire Candle is a luxury home fragrance brand based in Cyprus, committed to crafting high-quality, hand-poured candles made using natural soy wax. Our emphasis is on creating products that are luxurious and eco-friendly, made with only the finest ingredients and materials in a clean and serene environment. We take great care in the creation of each candle to ensure that every product we produce is of the highest quality.</p>

                    <p>Our scent selection includes mostly nature-like and flower scents, curated to create a warm and inviting atmosphere that soothes both the soul and the mind. LaNoire Candle has a fragrance that will suit your needs whether you want to unwind after a long day or create an inviting ambiance for your home. We believe that the power of fragrance can transform any moment into a luxurious experience and invite you to indulge in the art of fragrance with us.</p>

                    {/* <p>Our scent selection includes mostly nature-like and flower scents, carefully curated to create a warm and inviting atmosphere that soothes both the soul and the mind. Whether you're looking to unwind after a long day or create an inviting ambiance for your home, LaNoire Candle has a fragrance that will suit your needs.</p>

                    <p>Overall, we are passionate about delivering exceptional products that delight the senses and enhance the ambiance of any space. At LaNoire Candle, we believe that the power of fragrance can transform any moment into a luxurious experience, and we invite you to indulge in the art of fragrance with us.</p> */}
                </div>
                <div className='about-img-container'>
                    <img className="about-img" src={BannerImg} alt="Banner" />
                </div>
            </div>

        </div>
    );
}

export default About;