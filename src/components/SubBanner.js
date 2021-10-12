import React from 'react';
import MainBanner from '../images/main-banner.jpg';
function SubBanner(props){
    return(
    <div className="banner-sec">
        <div className="banner-img">
            <img src={MainBanner} alt="Inner Banner"/>
        </div>
        <div className="banner-content">
            <h2>{props.heading}</h2>
        </div>
    </div>
    )
}

export default SubBanner;