import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubBanner from "../components/SubBanner";
import Listing from "../components/Listing";
function MoviePage(){
    return(
        <div className="moviepage ">
            <Header active="movies"/>
            <SubBanner heading="Movies"/>
            <Listing heading="Movies" />
            <Footer/>
        </div>
    )
}

export default MoviePage;