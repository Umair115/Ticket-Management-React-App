import React from 'react';
import Card1 from '../images/card-1.png';
import Card2 from '../images/card-2.png';
import Card3 from '../images/card-3.png';
import Card4 from '../images/card-4.png';
const Payment = () => {
    return(
        <div className="bg-dark">
            <h3>How Would You Like to Pay?</h3>
                        <div className="book-payment-wrapper">
                            <h4>Payment Information</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-12 col-12">
                                        <div className="form-group">
                                            <label>Credit Card Type</label>
                                            <ul className="list-inline">
                                                <li className="list-inline-item checkbox">
                                                    <input type="radio" name="card-type" id="card-1"/>
                                                    <label for="card-1"><img src={Card1}
                                                        alt="card-img"/></label>
                                                </li>
                                                <li className="list-inline-item checkbox">
                                                    <input type="radio" name="card-type" id="card-2"/>
                                                    <label for="card-2"><img src={Card2}
                                                        alt="card-img"/></label>
                                                </li>
                                                <li className="list-inline-item checkbox">
                                                    <input type="radio" name="card-type" id="card-3"/>
                                                    <label for="card-3"><img src={Card3}
                                                        alt="card-img"/></label>
                                                </li>
                                                <li className="list-inline-item checkbox">
                                                    <input type="radio" name="card-type" id="card-4"/>/
                                                    <label for="card-4"><img src={Card4}
                                                        alt="card-img"/></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Card Number</label>
                                            <input type="number" className="form-control" placeholder="xxxx xxxx xxxx xxxx"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Card Holder Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Name on the Card"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Expiry Date</label>
                                            <input type="text" className="form-control date-picker" placeholder="Enter Date"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>CVV Code</label>
                                            <input type="number" className="form-control" placeholder="0000"/>
                                        </div>
                                    </div>
                                </div>
                                <button className="primary-btn primary-bg">Confirm Booking</button>
                            </form>
                        </div>
        </div>
    )
}

export default Payment;