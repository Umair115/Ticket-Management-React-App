import React from 'react';
import Booking from '../components/Booking';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubBanner from '../components/SubBanner';
import { Link, useLocation } from "react-router-dom";

const BookNow = () => {
    const location = useLocation()
    const { item, type } = location.state
    return(
        <div>
            <Header active="booking"/>
            <SubBanner heading={"Booking"}/>
            <Booking item={item} type={type}/>
            <Footer/>
        </div>
    )
}

export default BookNow;