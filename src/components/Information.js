import React from "react";

const Information = () => {
    return(
        <div className="car-book-page pc-p-6">
        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                    <div className="book-side-wrapper">
                        <div className="book-side-top">
                            <figure><img src="images/ticket-img.png" alt="car-detail-img"/></figure>
                            <h4>Ticket Name</h4>
                            <p><i className="fa fa-map-marker"></i> Other Details</p>
                        </div>
                        <div className="book-side-accordian">
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Booking Detail
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul>
                                                <li>
                                                    <p>Date <a href="#" className="p-link float-right">Edit</a></p>
                                                    <p>22/09/2021, 00:00 AM</p>
                                                    <p>22/09/2021, 00:00 AM</p>
                                                </li>
                                                <li>
                                                    <p>Place <span>Nueplex</span></p>
                                                </li>
                                                <li>
                                                    <p>Ticket Type <span>Premier</span></p>
                                                </li>
                                                <li>
                                                    <p>Movie Name <span>Drillis Ertugrul</span></p>
                                                </li>
                                                <li>
                                                    <p>Seat No. <span>0135</span></p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Coupon Code
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseThree" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <form action="#">
                                                <div className="form-group mb-0">
                                                    <input type="number" className="form-control" placeholder="Enter Code"/>
                                                    <button className="primary-btn primary-bg">Apply</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Payment
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapseFour" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <ul>
                                                <li>
                                                    <p>Subtotal <span>$580.00</span></p>
                                                </li>
                                                <li>
                                                    <p>Extra Price <span>$0.00</span></p>
                                                </li>
                                                <li>
                                                    <p>Tax <span>0%</span></p>
                                                </li>
                                                <li>
                                                    <p>Pay Amount <span>$580.00</span></p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}

export default Information;