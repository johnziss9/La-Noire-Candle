import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-md">
                <button className="navbar-toggler float-xs-right collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            {/* eslint-disable-next-line */}
                            <Link className="nav-link" onClick={() => props.productsRef.current.scrollIntoView({ behavior: 'smooth' })}>Products</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className="nav-link" onClick={() => props.aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className="nav-link" to="/CandleCare">Candle Care</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className="nav-link" href="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
