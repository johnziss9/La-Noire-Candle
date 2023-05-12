import React, { useRef } from 'react';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import ProductSection from '../../components/ProductSection/ProductSection';
import Footer from '../../components/Footer/Footer';
import "./Home.css";

function Home() {
  const productsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className='home-container'>
      <div className="home-header">
        <LogoHeader />
        <Navbar aboutRef={aboutRef} productsRef={productsRef} />
      </div>
      <Banner />
      <ProductSection ref={productsRef} />
      <About ref={aboutRef} />
      <Footer />
    </div>
  );
}

export default Home;
