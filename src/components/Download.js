import React from 'react';
import DownloadImage from '../images/android-download.png';
function Download(){
    return(
        <div className="download-sec pc-p-6">
        <div className="download-content">
            <div className="primary-heading color-light">
                <h3>Download Your Application Now !</h3>
                <a href="#"><img src={DownloadImage} alt="Android Download" style={{textDecoration: 'none'}}/></a>
            </div>
        </div>
        </div>
    )
}

export default Download;