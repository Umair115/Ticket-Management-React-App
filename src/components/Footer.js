import React from 'react';
import Logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faAndroid } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <footer className="pc-p-4">
        <div className="container">
            <div className="footer-sec">
                <div className="footer pc-p-6">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="footer-content primary-heading color-dark">
                                <div className="footer-logo mc-b-2">
                                    <img src={Logo} alt="Logo"/>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by readable content.</p>
                                <ul className="social-list list-inline mc-t-2">
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
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="footer-content">
                                <h3 className="mc-b-2">Quick links</h3>
                                <ul className="footer-list">
                                    <li> <Link to="/movies"  style={{textDecoration: 'none'}}> Movies </Link> </li>
                                    <li> <Link to="/cricket"  style={{textDecoration: 'none'}}> Cricket </Link> </li>
                                    {/* <li> <Link to="/booking"  style={{textDecoration: 'none'}}> Book Now </Link> </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="footer-content mc-l-2">
                                <h3 className="mc-b-2">Android Application </h3>
                                <p>Download our free mobile application for unlimited access </p>
                                <Link to="#" className="primary-btn primary-bg" style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faAndroid} /> Download Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center pc-p-2">
                    <div className="primary-heading color-dark">
                        <p>© 2021 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;