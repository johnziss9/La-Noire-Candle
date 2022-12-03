import React from 'react';
import './LogoHeader.css';
import logo from "../../images/logo.png"

function LogoHeader() {

  return (
    <>
      <div className='logo-header-container'>
        <div className='logo-container'>
          <img className='logo-img' src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default LogoHeader;
