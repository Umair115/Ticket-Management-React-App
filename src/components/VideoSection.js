import React from 'react';
import CompanyAnnouncement from '../videos/company_announcement.mp4';
function VideoSection(){
    return(
    <div className="video-sec pc-p-6 background-dark">
            <div className="container">
                <div className="primary-heading color-light text-center mc-b-8">
                    <h3>Our Purpose</h3>
                </div>
                <div className="video-img">
                    <video className="video" loop autoplay>
                        <source src={CompanyAnnouncement} type="video/mp4"/>
                    </video>
                </div>
            </div>
    </div>
    )
}

export default VideoSection;