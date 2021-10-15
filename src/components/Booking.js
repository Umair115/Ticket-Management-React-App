import React from 'react';
import Information from './Information';
import Payment from './Payment';
import Seats from './Seats';
import UserInformation from './UserInformation';

const Booking = () => {

    return(
        <div className="car-book-page pc-p-6 bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-md-12 col-12">
                    <div className="book-wrapper">
                        <Seats/>
                        <UserInformation/>
                        <Payment/>
                    </div>
                </div>
                {/* <Information/> */}
            </div>
        </div>
    </div>
    )

}

export default Booking;