import React from 'react';

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
                                                    <label for="card-1"><img src="images/card-1.png"
                                                        alt="card-img"/></label>
                                                </li>
                                                <li className="list-inline-item checkbox">
                                                    <input type="radio" name="card-type" id="card-2"/>
                                                    <label for="card-2"><img src="images/card-2.png"
                                                        alt="card-img"/></label>
                                                </li>
                                                <li className="list-inline-item checkbox">
                                                    <input type="radio" name="card-type" id="card-3"/>
                                                    <label for="card-3"><img src="images/card-3.png"
                                                        alt="card-img"/></label>
                                                </li>
                                                <li className="list-inline-item checkbox">
                                                    <input type="radio" name="card-type" id="card-4"/>/
                                                    <label for="card-4"><img src="images/card-4.png"
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