import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubBanner from "../components/SubBanner";
import Listing from "../components/Listing";
function CricketPage(){
    return(
        <div className="cricketpage ">
            <Header active="cricket"/>
            <SubBanner heading="Cricket"/>
            <Listing heading="Cricket" />
            <Footer/>
        </div>
    )
}

export default CricketPage;