import React from 'react';
import Details from '../components/Details';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SubBanner from '../components/SubBanner';

const DetailPage = () => {

    return(
        <div>
            <Header/>
            <SubBanner heading="MATCH DETAILS"/>
            <Details/>
            <Footer/>
        </div>
    )

}

export default DetailPage;