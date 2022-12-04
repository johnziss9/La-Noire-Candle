import React from 'react';
import "./Navbar.css";

function Navbar() {

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
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link" href="#">Candle Care</a>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
