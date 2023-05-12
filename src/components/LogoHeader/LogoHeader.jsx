import React from 'react';
import './LogoHeader.css';
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';

function LogoHeader() {

  return (
    <>
      <div className='logo-header-container'>
        <Link className='logo-container' to="/">
          <img className='logo-img' src={logo} alt="Logo" />
        </Link>
      </div>
    </>
  );
}

export default LogoHeader;
