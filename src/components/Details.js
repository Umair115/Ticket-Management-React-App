import React from "react";

function Details(){
    return(
    <div className="event-detail pc-p-6 background-dark">
            <div className="container">
                <div className="primary-heading color-light mc-b-8 text-center">
                    <h3>Pakistan Vs Newzealand</h3>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="primary-heading color-light">
                            <h5 className="mc-b-1">1st Test Match</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi autem facilis eveniet neque quas, nesciunt iure dolor consequatur explicabo quasi illo, esse omnis ratione, quidem consequuntur ipsa labore ullam earum!</p>
                            <ul className="d-flex justify-content-between">
                                <li> <span className="bold">Start Date : </span> <span> 7-September-2021 </span> </li>
                                <li> <span className="bold">End Date : </span> <span> 11-September-2021 </span> </li>
                            </ul>
                            <ul className="d-flex justify-content-between mc-t-1 mc-b-2">
                                <li> <span className="bold">Start Time : </span> <span> 10:00 AM </span> </li>
                                <li> <span className="bold">End Time : </span> <span> 5:00 PM </span> </li>
                            </ul>
                            <h5 className="mc-b-2">Available Dates : </h5>
                            <p> 8 September 2021 </p>
                            <p> 9 September 2021 </p>
                            <p> 10 September 2021 </p>
                            <p> 11 September 2021 </p>

                            <a href="booking.html" className="primary-btn primary-bg mc-t-4"> Book Your Tickets Now </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-img">
                            <img src={require('../images/event-detail1.jpg').default} alt="Event Details"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Details;