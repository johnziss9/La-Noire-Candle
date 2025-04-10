import React from 'react';
import { Link } from 'react-router-dom';
import './LogoHeader.css';
import logo from "../../images/logo_white.png"

function LogoHeader() {
  return (
    <>
      <div className='logo-header-container'>
        <div className='logo-container'>
          <Link to="/">
            <img className='logo-img' src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LogoHeader;