import React from "react";
import { Link, useLocation } from "react-router-dom";

function Details(){

    const location = useLocation()
    const { data, type } = location.state 
    
    return(
    <div className="event-detail pc-p-6 background-dark">
            <div className="container">
                <div className="primary-heading color-light mc-b-8 text-center">
                    <h3>{type == 'movie' ? data['movie_name'] : data['match_between']}</h3>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="primary-heading color-light">
                            <h5 className="mc-b-1">Description : </h5>
                            <p>{data[type+'_description']}</p>
                            <h5 className="mc-b-2">Date : </h5>
                            <p>{data[type+'_date']}</p>
                            <h5 className="mc-b-2">Time : </h5>
                            <p>{data[type+'_time']}</p>
                            <h5 className="mc-b-2">Type : </h5>
                            <p>{data[type+'_type']}</p>
                            {
                                type == 'movie' ? 
                                <>
                                <h5 className="mc-b-2">Price : </h5>
                                <p>{data[type+'_price']}</p>
                                </>
                                :
                                <>
                                <h5 className="mc-b-2">Classic Ticket : </h5>
                                <p>{data[type+'_classic_rate']}</p>
                                <h5 className="mc-b-2">Golden Ticket : </h5>
                                <p>{data[type+'_gold_rate']}</p>
                                <h5 className="mc-b-2">Platinum Ticket : </h5>
                                <p>{data[type+'_platinum_rate']}</p>
                                </> 
                            }

                            <Link to={{pathname: "/booking", state:{item: data,type:type}}} className="primary-btn primary-bg mc-t-4"> Book Your Tickets Now </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event-img">
                            <img src={data['thumbnail_image']} alt="Event Details"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Details;