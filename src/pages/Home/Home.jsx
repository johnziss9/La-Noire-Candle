import React from 'react';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import "./Home.css";

function Home() {

  return (
    <>
      <div className="home-header">
        <LogoHeader />
        <Navbar />
      </div>
      <hr />
    </>
  );
}

export default Home;
