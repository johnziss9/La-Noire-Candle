import React from 'react';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import ProductSection from '../../components/ProductSection/ProductSection';
import CandleCare from '../../components/CandleCare/CandleCare';
import Footer from '../../components/Footer/Footer';
import "./Home.css";
import BannerImg from "../../images/banner.png";

function Home() {
  return (
    <div className='home-container'>
      <div className="home-header">
        <LogoHeader />
        <Navbar />
      </div>
      <Banner src={BannerImg} alt="Banner Image" />
      <ProductSection />
      <About />
      <CandleCare />
      <Footer />
    </div>
  );
}

export default Home;
