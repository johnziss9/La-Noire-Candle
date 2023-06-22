import React from 'react';
import './CandleCare.css';
import '../../styles.css'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import CandleCareImg from "../../images/demo-img.png";

function CandleCare() {
    return (
        <>
            <div>
                <LogoHeader />
                <Navbar />
            </div>
            <div className='candle-care-container'>
                <div className='sub-page-title'>Candle Care</div>
                <div className='candle-care-content-container'>
                    <div className='candle-care-text-container'>
                        <p>LaNoire Candle uses natural soy wax in their candles, which has a unique characteristic known as "memory". This means that the wax will retain the shape of the first burn, which is why it's important to burn the candle to the edge of the glass during the first burn. By doing so, you will prevent the candle from "tunnelling", which is when the wax burns down the center of the candle and leaves a layer of wax around the edges.</p>

                        <p>By burning your LaNoire Candle to the edge of the glass each time you light it, you will promote an even burn and extend the life of your candle. This is because an even burn ensures that the wax pool doesn't become too deep, which can cause the candle to burn too quickly and waste the wax.</p>

                        <p>It's also important to remember to trim the wick of your candle before each use. This helps to prevent the mushroom effect, where the wick forms a small blackened mushroom-like shape at the tip, which can cause the flame to become too large and create soot. By trimming the wick, you can ensure a cleaner and longer burn for your LaNoire Candle.</p>
                    </div>
                    <div className='candle-care-img-container'>
                        <img className="candle-care-img" src={CandleCareImg} alt="candle-care" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CandleCare;