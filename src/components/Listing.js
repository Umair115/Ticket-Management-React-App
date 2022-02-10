import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../images/spinner.svg';

function Listing(props){

    const [data,setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const temp_name = props.heading == 'Cricket' ? 'match' : 'movie';
    const getData = async() => {
        const url = 'https://cors-anywhere786.herokuapp.com/https://demo-websitedesignengine.com/demo/travel_fyp/public/api/all-' + (props.heading == 'Cricket' ? 'matches' : 'movies');
        // console.log(url)
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data)
        setData(data.data);
        setLoading(false);
    }


    React.useEffect(()=>{
        getData();
    },[])


    return(
        <section className="destination-sec pc-p-6" className="background-dark">
        <div className="container">
            <div className="primary-heading color-light mc-b-8 text-center">
                <h3 className="text-uppercase">{props.heading}</h3>
            </div>
            <div className="row">
                {
                    loading ? <div style={{
                        flex: 1,
                        textAlign : 'center',
                    }}><img src={Spinner} width={50} height={50}/></div>: 
                    data.map(_data => {
                        return(
                            <div className="col-lg-4 col-md-6 col-12">
                            <div className="destination-box">
                                <div className="destination-img">
                                    <img src={_data['thumbnail_image']} alt="Destination"/>
                                </div>
                                <div className="destination-content">
                                    <div className="primary-heading color-light">
                                        
                                        <h5 style={{color:'white'}}>{_data[props.heading == 'Cricket' ? 'match_between' : 'movie_name']}</h5>
                                        <p>{_data[props.heading == 'Cricket' ? 'match_description' : 'movie_description'].slice(0,100)+'....'}</p> 
                                        <Link to={{pathname:"/detail",state:{data: _data, type: temp_name}}}  className="primary-btn primary-bg">{props.heading == 'Cricket' ? 'Match' : 'Movie' } Details</Link>
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