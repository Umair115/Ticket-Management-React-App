import React from "react";
import SeatImg from '../images/chair-img1.png';
const Seats = () => {
    return(
        <div className="bg-dark">
            <h3 className="text-uppercase">Book Your Seats Now</h3>
                        <div className="book-who-wrapper mc-b-5">
                            <form action="#" className="seat-table">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label for="category">Select Category</label>
                                            <select name="" id="" className="form-control">
                                                <option value="Classic">Classic</option>
                                                <option value="Premier">Premier</option>
                                                <option value="Gold">Gold</option>
                                            </select>
                                        </div>
                                    </div>
                                     <div className="col-lg-4">
                                        <div className="form-group">
                                            <label for="category">Select Stadium</label>
                                            <select name="" id="" className="form-control">
                                                <option value="National Stadium">National Stadium</option>
                                                <option value="Gaddafi Stadium">Gaddafi Stadium</option>
                                                <option value="Iqbal Stadium">Iqbal Stadium</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label for="category">Select Cinema</label>
                                            <select name="" id="" className="form-control">
                                                <option value="Cinepax Cinema">Cinepax Cinema</option>
                                                <option value="Nueplex Cinemas DHA">Nueplex Cinemas DHA</option>
                                                <option value="Capri Cinema">Capri Cinema</option>
                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <ul>
                                    <li>
                                        <div className="form-group">
                                            <input type="checkbox" id="chair1" checked/>
                                            <label for="chair1">Seat No: 01 <span><img src={SeatImg} alt="Chair Image"/></span></label>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </form>
                        </div>
        </div>
    )
}

export default Seats;