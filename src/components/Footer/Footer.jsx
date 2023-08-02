import React from 'react';
import './Footer.css';
import EmailImg from '../../images/email.png';
import FacebookImg from '../../images/facebook.png';
import InstagramImg from '../../images/instagram.png';

function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='footer-socials-container'>
                <div className='footer-email-container'>
                    <img src={EmailImg} alt='Email' className='footer-email-image' />
                </div>
                <div className='footer-facebook-container'>
                    <img src={FacebookImg} alt='Facebook' className='footer-facebook-image' />
                </div>
                <div className='footer-instagram-container'>
                    <img src={InstagramImg} alt='Instagram' className='footer-instagram-image' />
                </div>
            </div>
        </div>
    );
}

export default Footer;