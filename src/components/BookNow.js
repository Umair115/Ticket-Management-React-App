import React from 'react';
import MovieBanner from '../images/movies-banner.jpg'; 
import CricketBanner from '../images/cricket-banner.jpg'; 
function BookNow(){
    return(
        <div className="movies-sec background-dark">
        <div className="container-fluid">
            <div className="primary-heading color-light text-center mc-b-8">
                <h3>Book Now</h3>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 p-0">
                    <div className="bann-img">
                        <img src={MovieBanner} alt="Movies Banner"/>
                        <div className="bann-content">
                            <div className="primary-heading color-light text-center">
                                <h3 className="mc-b-4">Movies</h3>
                                <p className="mc-b-4">A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving
                                    images.
                                </p>
                                <a href="movies.html" className="primary-btn primary-bg" style={{textDecoration: 'none'}}>Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 p-0">
                    <div className="bann-img">
                        <img src={CricketBanner} alt="Cricket Banner"/>
                        <div className="bann-content">
                            <div className="primary-heading color-light text-center">
                                <h3 className="mc-b-4">Cricket</h3>
                                <p className="mc-b-4">Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end, each comprising two bails balanced on three stumps.</p>
                                <a href="cricket.html" className="primary-btn primary-bg" style={{textDecoration: 'none'}}>Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default BookNow;