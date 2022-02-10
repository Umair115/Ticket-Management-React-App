import React from 'react';
import MainBanner from '../images/main-banner.jpg';
import MovieIcon from '../images/movie-icon.png';
import CalendarIcon from '../images/calendar-icon.png';
import GlobeIcon from '../images/globe-icon.png';
import CricketIcon from '../images/cricket-icon.png';
function MainSlider() {

    return(
        <div className="main-slider">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={MainBanner} alt="Main Banner"/>
                    <div className="slider-caption">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-12 col-center">
                                    <h4>Welcome To</h4>
                                    <h1>Ticket Store</h1>
                                    <p>Covid is currently interrupting the life of almost every citizen. Due to covid it is dangerous to go out and purchase anything onsite. So the solution to this issue, is to promote shopping online, but then again in
                                        online shopping there is a high risk of hacking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="slider-form">
                        <div className="container">
                            <nav>
                                <div className="nav nav-tabs mc-b-2" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link primary-btn primary-bg active" style={{textDecoration: 'none'}} id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Movies</a>
                                    <a className="nav-item nav-link primary-btn primary-bg" style={{textDecoration: 'none'}} id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Cricket</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <div className="form-group">
                                                    <select name="" id="">
                                                        <option value="Select A Movie">Select A Movie</option>
                                                        <option value="Lorem Ipsum">Money Heist</option>
                                                        <option value="Lorem Ipsum">Drillis Ertugrul</option>
                                                        <option value="Lorem Ipsum">Passengers</option>
                                                    </select>
                                                    <span> <img src={MovieIcon}  className="movie-icon" alt="Movie Icon"/> </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" placeholder="Select Date"/>

                                                    <span> <img src={CalendarIcon} alt="Calendar Icon"/> </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <div className="form-group">
                                                    <input type="time" className="form-control" placeholder="Travel Type"/>
                                                    <span> <img src={GlobeIcon} alt="Globe Icon"/> </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <button className="primary-btn primary-bg text-uppercase w-100">Find Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-3 ">
                                                <div className="form-group">
                                                    <select name="" id="">
                                                        <option value="Select Match">Select Match</option>
                                                        <option value="Lorem Ipsum">Lorem Ipsum</option>
                                                        <option value="Lorem Ipsum">Lorem Ipsum</option>
                                                    </select>
                                                    <span> <img src={CricketIcon} alt="Cricket Icon"/> </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 ">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" placeholder="Select Date"/>

                                                    <span> <img src={CalendarIcon} alt="Calendar Icon"/> </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 ">
                                                <div className="form-group">
                                                    <input type="time" className="form-control" placeholder="Travel Type"/>
                                                    <span> <img src={GlobeIcon} alt="Globe Icon"/> </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 ">
                                                <button className="primary-btn primary-bg text-uppercase w-100">Find Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    
    )
    
    
}

export default MainSlider;
