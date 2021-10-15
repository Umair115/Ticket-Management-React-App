import React from 'react';
import Booking from '../components/Booking';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubBanner from '../components/SubBanner';
const BookNow = () => {
    return(
        <div>
            <Header/>
            <SubBanner heading={"Booking"}/>
            <Booking/>
            <Footer/>
        </div>
    )
}

export default BookNow;