import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../images/logo.png';
function Header() {
    return (
        <header className="header" id="header">
            <div className="top-row">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-3 col-12">
                            <ul className="list-inline social-list text-left">
                                <li className="list-inline-item">
                                    <Link to="#"> <FontAwesomeIcon icon={faFacebook} /> </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"> <FontAwesomeIcon icon={faInstagram} /> </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"> <FontAwesomeIcon icon={faTwitter} /> </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#"> <FontAwesomeIcon icon={faYoutube} /> </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-9 col-12">
                            <ul className="list-inline text-right">
                                <li className="list-inline-item">
                                    <Link to="#" style={{textDecoration: 'none'}}> <FontAwesomeIcon icon={faMapMarkerAlt} /> Sir Syed University </Link>
                                </li>
                                <span> | </span>
                                <li className="list-inline-item">
                                    <Link to="#" style={{textDecoration: 'none'}}> <FontAwesomeIcon icon={faPhoneAlt} /> (021) 1234567 </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-row">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="Logo"/>
                                </Link>
                                <div className="hamburger d-block d-lg-none">
                                    <div className="hamburger-container">
                                        <span className="big-btn"></span>
                                        <span></span>
                                        <span className="big-btn"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <ul className=" navigation-list d-none d-lg-block">
                                    <li className="active"><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li>
                                    <li className=""><Link to="/cricket" style={{textDecoration: 'none'}}>Cricket</Link></li>
                                    <li className=""><Link to="/movies" style={{textDecoration: 'none'}}>Movies</Link></li>
                                    <li className=""><Link to="/booking" style={{textDecoration: 'none'}}>Book Now</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;