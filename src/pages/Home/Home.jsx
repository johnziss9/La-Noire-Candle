import React from 'react';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Product from '../../components/Product/Product';
import "./Home.css";

function Home() {

  return (
    <div className='home-container'>
      <div className="home-header">
        <LogoHeader />
        <Navbar />
      </div>
      <div className="home-products-container">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Home;
