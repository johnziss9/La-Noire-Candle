import React from 'react';
import './Footer.css';
import EmailImg from '../../images/email.png';
import FacebookImg from '../../images/facebook.png';
import InstagramImg from '../../images/instagram.png';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <div className='footer-main'>
                    <div className='footer-logo-section'>
                        <div className='footer-company-name'>LaNoire Candle</div>
                        <div className='footer-company-tagline'>Handcrafted luxury scents for your home and beyond</div>
                    </div>
                    
                    <div className='footer-links-section'>
                        <div className='footer-links-title'>Quick Links</div>
                        <div className='footer-links'>
                            <Link to="/about" className='footer-link'>About Us</Link>
                            <Link to="/products/candles" className='footer-link'>Candles</Link>
                            <Link to="/products/diffsers" className='footer-link'>Defusers</Link>
                            <Link to="/products/airfresheners" className='footer-link'>Air Fresheners</Link>
                            <Link to="/candle-care" className='footer-link'>Candle Care</Link>
                        </div>
                    </div>
                    
                    <div className='footer-contact-section'>
                        <div className='footer-contact-title'>Contact Us</div>
                        <div className='footer-contact-info'>
                            <div>Email: hello@lanoirecandle.com</div>
                            <div>Phone: +357 99 123 456</div>
                            <div>Address: Nicosia, Cyprus</div>
                        </div>
                    </div>
                </div>
                
                <div className='footer-divider'></div>
                
                <div className='footer-bottom'>
                    <div className='footer-socials-container'>
                        <a href="mailto:hello@lanoirecandle.com" className='footer-social-icon'>
                            <img src={EmailImg} alt='Email' className='footer-social-image' />
                        </a>
                        <a href="https://facebook.com/lanoirecandle" target="_blank" rel="noopener noreferrer" className='footer-social-icon'>
                            <img src={FacebookImg} alt='Facebook' className='footer-social-image' />
                        </a>
                        <a href="https://instagram.com/lanoirecandle" target="_blank" rel="noopener noreferrer" className='footer-social-icon'>
                            <img src={InstagramImg} alt='Instagram' className='footer-social-image' />
                        </a>
                    </div>
                    
                    <div className='footer-copyright'>
                        © {currentYear} LaNoire Candle. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;