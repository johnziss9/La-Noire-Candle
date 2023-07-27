import React, { useState, useRef } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com";

function Navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(process.env.REACT_APP_PUBLIC_KEY);

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


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
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className="nav-link" to="/CandleCare">Candle Care</Link>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line */}
                            <Link className="nav-link" href="#" onClick={handleShow}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Modal show={show} onHide={handleClose} backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className='contact-form-control-group'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='from_name' placeholder="Enter your name..." />
                        </Form.Group>
                        <Form.Group className='contact-form-control-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='from_email' placeholder="Enter your email..." />
                        </Form.Group>
                        <Form.Group className='contact-form-control-group'>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="number" name='from_contact_number' placeholder="Enter your contact number..." />
                        </Form.Group>
                        <Form.Group className='contact-form-control-group'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name='from_message' rows="7" placeholder="Enter your message..." />
                        </Form.Group>
                        <Form.Group className='modal-button-group'>
                            <Button variant="secondary" onClick={handleClose} className='modal-button'>
                                Close
                            </Button>
                            <Button variant="dark" type='submit' className='modal-button'>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Navbar;
