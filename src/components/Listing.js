import React from 'react';

function Listing(props){

    var matches = [
        {
            id : 1,
            match_name : 'Match Name',
            match_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            match_image : 'cricket-img1.jpg'
        },
        {
            id : 2,
            match_name : 'Match Name',
            match_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            match_image : 'cricket-img2.jpg'
        },
        {
            id : 3,
            match_name : 'Match Name',
            match_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            match_image : 'cricket-img3.jpg'
        },
        {
            id : 4,
            match_name : 'Match Name',
            match_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            match_image : 'cricket-img4.jpg'
        },
        {
            id : 5,
            match_name : 'Match Name',
            match_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            match_image : 'cricket-img5.jpg'
        },
        {
            id : 6,
            match_name : 'Match Name',
            match_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            match_image : 'cricket-img6.jpg'
        },
    ]

    var movies = [
        {
            id : 1,
            movie_name : 'Movie Name',
            movie_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            movie_image : 'movie-img1.jpg'
        },
        {
            id : 2,
            movie_name : 'Movie Name',
            movie_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            movie_image : 'movie-img2.jpg'
        },
        {
            id : 3,
            movie_name : 'Movie Name',
            movie_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            movie_image : 'movie-img3.jpg'
        },
        {
            id : 4,
            movie_name : 'Movie Name',
            movie_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            movie_image : 'movie-img4.jpg'
        },
        {
            id : 5,
            movie_name : 'Movie Name',
            movie_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            movie_image : 'movie-img5.jpg'
        },
        {
            id : 6,
            movie_name : 'Movie Name',
            movie_details : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus cumque reiciendis, velit ut quos sed eius placeat sit! Dolore quibusdam iure maiores corporis ex repudiandae quod sunt distinctio ipsam!',
            movie_image : 'movie-img6.jpg'
        },
    ]

    return(
        <section className="destination-sec pc-p-6" className="background-dark">
        <div className="container">
            <div className="primary-heading color-light mc-b-8 text-center">
                <h3 className="text-uppercase">{props.heading}</h3>
            </div>
            <div className="row">
                {
                    props.heading == 'Cricket' ? 
                    matches.map(match => {
                        return(
                            <div className="col-lg-4 col-md-6 col-12">
                            <div className="destination-box">
                                <div className="destination-img">
                                    <img src={require('../images/'+match.match_image).default} alt="Destination"/>
                                </div>
                                <div className="destination-content">
                                    <div className="primary-heading color-light">
                                        <h5>{match.match_name}</h5>
                                        <p>{match.match_details}</p>
                                        <a href="cricket-details.html" className="primary-btn primary-bg">Match Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                    :
                    movies.map(movie => {
                        return(
                            <div className="col-lg-4 col-md-6 col-12">
                            <div className="destination-box">
                                <div className="destination-img">
                                    <img src={require('../images/'+movie.movie_image).default} alt="Destination"/>
                                </div>
                                <div className="destination-content">
                                    <div className="primary-heading color-light">
                                        <h5>{movie.movie_name}</h5>
                                        <p>{movie.movie_details}</p>
                                        <a href="cricket-details.html" className="primary-btn primary-bg">Movie Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })

                }
                   
            </div>
        </div>
    </section>
    )
}
export default Listing;