import React from 'react';
import './CandleCare.css';
import '../../styles.css'
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import Navbar from '../../components/Navbar/Navbar';
import CandleCareImg1 from "../../images/demo-img.png";
import CandleCareImg2 from "../../images/demo-img.png";
import CandleCareImg3 from "../../images/demo-img.png";
import CandleCareImg4 from "../../images/demo-img.png";
import Footer from '../../components/Footer/Footer';

function CandleCare() {
    return (
        <>
            <div className="header">
                <LogoHeader />
                <Navbar />
            </div>
            <div className='candle-care-container'>
                <div className='candle-care-content'>
                    <div className='candle-care-header'>
                        <h1>Candle Care Guide</h1>
                    </div>
                    
                    <section className='care-section'>
                        <div className='care-content'>
                            <h2>The First Burn - Why It Matters</h2>
                            <p>
                                LaNoire Candles use natural soy wax, which has a unique characteristic known as "memory." 
                                This means the wax will retain the shape of its first burn, making this initial lighting 
                                crucial for your candle's performance.
                            </p>
                            <p>
                                Always allow your candle to burn until the entire surface has melted into a pool of wax 
                                (approximately 2-3 hours). This prevents "tunneling" - when the wax burns down only the 
                                center and leaves unused wax around the edges. A proper first burn ensures your candle 
                                will burn evenly throughout its lifetime.
                            </p>
                        </div>
                        <div className='care-image'>
                            <img src={CandleCareImg1} alt="First burn candle" />
                        </div>
                    </section>
                    
                    <section className='care-section reverse'>
                        <div className='care-content'>
                            <h2>Maintaining the Perfect Burn</h2>
                            <p>
                                By burning your LaNoire Candle to the edge of the glass each time you light it, 
                                you'll promote an even burn and extend the life of your candle. An even burn prevents 
                                the wax pool from becoming too deep, which can cause the candle to burn too quickly 
                                and waste precious fragrance and wax.
                            </p>
                            <p>
                                Never burn your candle for more than 4 hours at a time. This prevents overheating 
                                and ensures the longevity of your luxury candle. Always allow the candle to cool 
                                completely before relighting.
                            </p>
                        </div>
                        <div className='care-image'>
                            <img src={CandleCareImg2} alt="Perfect burn candle" />
                        </div>
                    </section>
                    
                    <section className='care-section'>
                        <div className='care-content'>
                            <h2>Wick Maintenance</h2>
                            <p>
                                Always trim your wick to approximately 1/4 inch before lighting your candle. This prevents:
                            </p>
                            <ul className='care-list'>
                                <li>Excessive smoking</li>
                                <li>Soot buildup</li>
                                <li>The "mushroom effect" (when the wick forms a blackened mushroom-like tip)</li>
                                <li>Uncontrolled flames</li>
                            </ul>
                            <p>
                                If you notice your flame is too high or flickering excessively, extinguish the candle, 
                                let it cool, trim the wick, and relight.
                            </p>
                        </div>
                        <div className='care-image'>
                            <img src={CandleCareImg3} alt="Wick trimming" />
                        </div>
                    </section>
                    
                    <section className='care-section reverse'>
                        <div className='care-content'>
                            <h2>Storage & Protection</h2>
                            <p>
                                To preserve the exquisite fragrance of your LaNoire candle:
                            </p>
                            <ul className='care-list'>
                                <li>Store in a cool, dry place away from direct sunlight</li>
                                <li>Cover your candle when not in use to prevent dust accumulation and fragrance evaporation</li>
                                <li>Avoid placing near windows, air conditioners, fans, or drafty areas as temperature changes can cause uneven burning and affect fragrance throw</li>
                            </ul>
                        </div>
                        <div className='care-image'>
                            <img src={CandleCareImg4} alt="Candle storage" />
                        </div>
                    </section>
                    
                    <section className='safety-section'>
                        <h2>Safety Guidelines</h2>
                        <ul className='safety-list'>
                            <li>Never leave a burning candle unattended</li>
                            <li>Always place on a heat-resistant surface</li>
                            <li>Keep away from flammable items, children, and pets</li>
                            <li>Discontinue use when only 1/2 inch of wax remains at the bottom of the container</li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CandleCare;