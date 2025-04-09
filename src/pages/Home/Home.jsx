import React from 'react';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/AboutSection/AboutSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import Footer from '../../components/Footer/Footer';
import "./Home.css";
import Aspects from '../../components/Aspects/Aspects';

function Home() {

  return (
    <div className='home-container'>
      <div className="home-header">
        <LogoHeader />
        <Navbar />
      </div>
      <Banner />
      <ProductSection />
      <AboutSection />
      <Aspects />
      <Footer />
    </div>
  );
}

export default Home;
