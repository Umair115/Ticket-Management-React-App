import React from "react";

const UserInformation = () => {
    const [fname,setFName] = React.useState("");
    return(
        <div className="bg-dark">
            <h3 className="text-uppercase">Let us know who you are</h3>
                        <div className="book-who-wrapper mc-b-5">
                            <h4>Personal Information</h4>
                            
                                <div className="row">
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input type="text" value={fname} onChange={(event)=>setFName(event.target.value)} className="form-control" placeholder="Enter First Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Last Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter Email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" placeholder="Enter Phone Number"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>Movie</label>
                                            <select className="form-control">
                                                <option>Select Movie</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>Match</label>
                                            <select className="form-control">
                                                <option>Select Match</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>City</label>
                                            <select className="form-control">
                                                <option>Select City</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>Select Timings</label>
                                            <select className="form-control">
                                                <option>Select Timing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label>Select Date</label>
                                            <select className="form-control">
                                                <option>Select Date</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <div className="form-group">
                                            <label>Special Requirements</label>
                                            <textarea className="form-control" rows="8" placeholder="Enter Requirements"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button className="primary-btn primary-bg" onClick={()=>{console.log(fname)}}>Continue</button>
                            
                        </div>
        </div>
    )
}
export default UserInformation;