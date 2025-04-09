import React from 'react';
import './About.css';
import '../../styles.css'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import AboutImg1 from "../../images/demo-img.png";
import AboutImg2 from "../../images/demo-img.png";
import Footer from '../../components/Footer/Footer';

function About() {
    return (
        <>
            <div className="header">
                <LogoHeader />
                <Navbar />
            </div>
            <div className='about-container'>
                <div className='about-content'>
                    <div className='about-header'>
                        <h1>Our Story</h1>
                    </div>
                    
                    <section className='about-section'>
                        <div className='about-text-content'>
                            <h2>Crafting Luxury with Purpose</h2>
                            <div className='about-text'>
                                <p>LaNoire Candle is a luxury home fragrance brand based in Cyprus, committed to crafting high-quality, hand-poured candles made using natural soy wax. Our emphasis is on creating products that are luxurious and eco-friendly, made with only the finest ingredients and materials in a clean and serene environment. We take great care in the creation of each candle to ensure that every product we produce is of the highest quality.</p>
                            </div>
                        </div>
                        <div className='about-image'>
                            <img src={AboutImg1} alt="Handcrafted candle making process" />
                        </div>
                    </section>
                    
                    <section className='about-section reverse'>
                        <div className='about-text-content'>
                            <h2>Nature-Inspired Fragrances</h2>
                            <div className='about-text'>
                                <p>Our scent selection includes mostly nature-like and flower scents, curated to create a warm and inviting atmosphere that soothes both the soul and the mind. LaNoire Candle has a fragrance that will suit your needs whether you want to unwind after a long day or create an inviting ambiance for your home. We believe that the power of fragrance can transform any moment into a luxurious experience and invite you to indulge in the art of fragrance with us.</p>
                            </div>
                        </div>
                        <div className='about-image'>
                            <img src={AboutImg2} alt="Our serene workspace in Cyprus" />
                        </div>
                    </section>
                    
                    <section className='about-values'>
                        <h2>Our Values</h2>
                        <div className='values-grid'>
                            <div className='value-item'>
                                <h3>Quality</h3>
                                <p>We use only premium ingredients and materials to craft candles that burn clean and release exquisite fragrances.</p>
                            </div>
                            <div className='value-item'>
                                <h3>Sustainability</h3>
                                <p>Our commitment to natural soy wax and eco-friendly practices reflects our respect for the environment.</p>
                            </div>
                            <div className='value-item'>
                                <h3>Craftsmanship</h3>
                                <p>Each candle is hand-poured with attention to detail, ensuring a luxury experience from first light to last flicker.</p>
                            </div>
                            <div className='value-item'>
                                <h3>Innovation</h3>
                                <p>We constantly explore new scent combinations and techniques to create unique sensory experiences.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;