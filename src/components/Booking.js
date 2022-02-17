import React from 'react';
import SeatImg from '../images/chair-img1.png';
import Card2 from '../images/card-2.png';
import { ethers } from "ethers";
import myNft from "./MyNFT.json";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Booking = (props) => {
    const [seats, setSeats] = React.useState([]);
    const [price, setPrice] = React.useState(0);
    const [availableSeat, setAvailableSeat] = React.useState([]);
    const [selectedSeat, setSelectedSeat] = React.useState([]);
    const [reservedSeat, setReservedSeat] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [fname,setFName] = React.useState("");
    const [lname,setLName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [cnic,setCNIC] = React.useState("");
    const [cardNo,setCardNo] = React.useState("");
    const [cardHolder,setCardHolder] = React.useState("");
    const [expiry,setExpiry] = React.useState("");
    const [cvv,setCVV] = React.useState("");
    const [matchSeatType, setMatchSeatType] = React.useState('classic');
    const [noOfTicket, setNoOfTicket] = React.useState(0);
    const [showThankYouModal, setShowThankYouModal] = React.useState('none');
    const history = useHistory();
    // console.log(props)

    function validateFields(){
        if(fname == ""){
            alert("First Name Can't Be Empty")
            return "Field Error"
        }
        if(lname == ""){
            alert("Last Name Can't Be Empty")
            return "Field Error"
        }
        if(email == ""){
            alert("Email Can't Be Empty")
            return "Field Error"
        }
        if(cnic == ""){
            alert("CNIC Can't Be Empty")
            return "Field Error"
        }
        if(cardNo == ""){
            alert("Card No Can't Be Empty")
            return "Field Error"
        }
        if(cardHolder == ""){
            alert("Card Holder Can't Be Empty")
            return "Field Error"
        }
        if(expiry == ""){
            alert("Expiry Can't Be Empty")
            return "Field Error"
        }
        if(cvv == ""){
            alert("CVV Can't Be Empty")
            return "Field Error"
        }
        if(noOfTicket == 0 && props.type == 'match'){
            alert("Please Select No Of Seats To Continue")
            return "Field Error"
        } 
        if(selectedSeat.length == 0 && props.type == 'movie'){
            alert("Please Select Seats To Continue")
            return "Field Error"
        }
    }

    console.log(selectedSeat.length)

    async function getSeats(){
        if(props.type == 'movie'){
            const url = 'https://cors-anywhere786.herokuapp.com/https://demo-websitedesignengine.com/demo/travel_fyp/api/seats/'+props.item.movie_name;
            let response = await fetch(url);
            let data = await response.json();
            let _seats = data.seats;
            _seats.forEach(seat => {
                if(seat.available == 'available'){
                    availableSeat.push({id: seat.row_no+seat.seat_name , seat:seat})
                }
                else if(seat.available == 'reserved'){
                    reservedSeat.push({id: seat.row_no+seat.seat_name , seat:seat})
                }
            });
            setSeats(data.seats);
            setLoading(false);
        }
        else if(props.type == 'match'){
            const url = 'https://cors-anywhere786.herokuapp.com/https://demo-websitedesignengine.com/demo/travel_fyp/api/match-seats/'+props.item.match_between+'/'+props.item.match_date;
            let response = await fetch(url);
            let data = await response.json();
            setSeats(data.seats)
            setLoading(false)
        }
    } 

    async function connectAccounts(_cnic){

        const provider = new ethers.providers.JsonRpcProvider();
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //contract address
        const  signer = provider.getSigner("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266") //account address
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
          myNft.abi,
          signer
        )
        try{
            let overrides = {
              // To convert Ether to Wei:
              value: ethers.utils.parseEther("1.0")     // ether in this case MUST be a string
          
              // Or you can use Wei directly if you have that:
              // value: someBigNumber
              // value: 1234   // Note that using JavaScript numbers requires they are less than Number.MAX_SAFE_INTEGER
              // value: "1234567890"
              // value: "0x1234"
          
              // Or, promises are also supported:
              // value: provider.getBalance(addr)
          };
            // const cnic =  ;
          // Pass in the overrides as the 3rd parameter to your 2-parameter function:
            const response = await contract.mintNFT(_cnic,overrides);
            console.log("response : ",response);
            var tid = (await contract.tokID()).toString()
            console.log("token id : ",tid);
            return tid;
            // setmintID(tid)
          }
          catch(err){
            console.log(err)
          }
        
        // const NFTCont = new ethers.Contract(contractAddress, conABI, provider);
        // const NFTSigner = NFTCont.connect(signer);
      } 

      

    function checkSeatStatus(seat){
          
            let tempSeat = availableSeat.find((item) => item ? item.id === seat.row_no+seat.seat_name: null)
            let reserveTempSeat = reservedSeat.find((item) => item ? item.id === seat.row_no+seat.seat_name : null)
            let selectTempSeat = selectedSeat.find((item) => item ? item.id === seat.row_no+seat.seat_name : null)
    
            if(tempSeat){
                return "gray";
            }
            else if(reserveTempSeat){
                return "#ffffff";
            }
            else if(selectTempSeat){
                return "#f2d467";
            }

            console.log(seat)
        
    }
    async function bookTickets(){

        var fieldChecks = validateFields();

        if(fieldChecks !== 'Field Error'){

            var nft = connectAccounts(cnic);
    
            axios.post('https://cors-anywhere786.herokuapp.com/https://demo-websitedesignengine.com/demo/travel_fyp/api/bookTicket', 
            {
                "type": props.type,
                "first_name" : fname,
                "last_name" : lname,
                "email": email,
                "cnic": cnic,
                "nft": nft,
                "cardNo": cardNo,
                "cardHolder": cardHolder,
                "expiry": expiry,
                "cvv": cvv,
                "ticket_type": props.type,
                "movie": props.type == 'movie' ? props.item.movie_name : '',
                "match": props.type == 'match' ? props.item.match_between : '',
                "total_amount": price,
                "total_no_seats": props.type == 'match' ? noOfTicket : 0,
                "seats": props.type == 'movie' ? selectedSeat : {
                    seatType : matchSeatType,
                    tickets : noOfTicket
                }
                    
            })
              .then((response) => {
                console.log(response);
                // if(response.json().status === 'success'){
                    setShowThankYouModal('block')
                    setTimeout(()=>{
                        history.push('/')
                    },2000)
                    
                // }
              }, (error) => {
                console.log(error);
              });
        }

          

        
    }

    const calPrice = (type, nOt) => {
        if(props.type === 'match'){
            return props.item['match_'+type+'_rate'] * nOt
        }
        else if(props.type === 'movie'){
            return props.item['movie_price'] * selectedSeat.length
        }
    }

    React.useEffect(()=>{
        getSeats()
        
    },[])

    return(
        <div className="car-book-page pc-p-6 bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-md-12 col-12">
                    <div className="book-wrapper">
                    {/* Seats */}
                    <div className="bg-dark">
                        <h3 className="text-uppercase">Book Your Seats Now</h3>
                        {
                            loading ? "Loading" : 
                            <div className="book-who-wrapper mc-b-5">
                                        <h4>{props.type == 'movie' ? props.item['movie_name'] : props.item['match_between']}</h4>
                                        {/* <p className="text-light">Note : You can select max 6 tickets at a time</p> */}
                                        <form className="seat-table">
                                            <div className="row">
                                                {props.type == 'match' ? <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label for="category">Select Category</label>
                                                        <select name="" id="" value={matchSeatType} className="form-control" onChange={(event)=>{
                                                            setMatchSeatType(event.target.value)
                                                            setPrice(calPrice(event.target.value, noOfTicket))
                                                        }}>
                                                            <option value="classic">Classic</option>
                                                            <option value="gold">Gold</option>
                                                            <option value="platinum">Platinum</option>
                                                        </select>
                                                    </div>
                                                </div> : null}
                                                
                                                {props.type == 'movie' ? <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label for="category">Select Cinema</label>
                                                        <select name="" id="" className="form-control">
                                                            <option value="Cinema1">Cinema 1</option>
                                                        </select>
                                                    </div>
                                                </div>  : null}
                                                
                                            </div>
                                            <ul>
                                                <li>
                                                    <div className="form-group">
                                                    
                                                        {
                                                            props.type == 'movie' ? 
                                                            seats.map(seat => {
                                                            

                                                                return (
                                                                    <div className="text-light" style={{display:'inline'}} onClick={()=>{
                                                                        if(checkSeatStatus(seat) === '#ffffff'){
                                                                            alert('Sorry This Seat Is Already Booked!')
                                                                        }else{
                                                                            selectedSeat.push(availableSeat.find((item) => item.id === seat.row_no+seat.seat_name))
                                                                            setAvailableSeat(availableSeat.filter((item) => item.id !== seat.row_no+seat.seat_name))
                                                                            setPrice(calPrice())
                                                                        }
                                                                    }}>
                                                                        
                                                                        <img src={SeatImg} style={{backgroundColor:checkSeatStatus(seat) || 'red' , margin: 3, padding: 20}} width={100} height={100} alt="Chair Image"/>
                                                                        
                                                                    </div>
                                                                )
                                                            
                                                            
                                                            })
                                                            :
                                                            <div>
                                                                <p className='text-light'>{matchSeatType+" Seats Available : " + seats[0][matchSeatType.toLowerCase()+'_tickets_quantity']}</p>
                                                                <label className='text-light'>Enter No Of Tickets</label>
                                                                <input type="number" value={noOfTicket} onChange={(event)=>{

                                                                    setNoOfTicket(event.target.value)
                                                                    setPrice(calPrice(matchSeatType,event.target.value))

                                                                }} className="form-control" placeholder="0"/>
                                                            </div>
                                                        }
                                                        
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </form>
                                       {props.type == "movie" ? <button className="primary-btn primary-bg" onClick={()=>{
                                        selectedSeat.map((seat) => seat ? availableSeat.push(seat) : null)
                                        setSelectedSeat([])
                                        setPrice(0)
                                        }}>Undo</button> : null}
                            </div>
                        }                
                    </div>
                        
                    {/* User Information */}
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
                                                <input type="text" value={lname} onChange={(event)=>setLName(event.target.value)} className="form-control" placeholder="Enter Last Name"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} className="form-control" placeholder="Enter Email"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <div className="form-group">
                                                <label>CNIC</label>
                                                <input type="text" value={cnic} data-inputmask="'mask': '99999-9999999-9'"  onChange={(event)=>setCNIC(event.target.value)} className="form-control" placeholder="Enter CNIC"/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                
                            </div>
                    </div>
                        
                    {/* Payment */}
                        
                    <div className="bg-dark">
                        <h3>How Would You Like to Pay?</h3>
                            <div className="book-payment-wrapper">
                                <h4>Payment Information</h4>
                                
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="form-group">
                                                <label>Credit Card Type</label>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item checkbox">
                                                        <input type="radio" name="card-type" id="card-2"/>
                                                        <label for="card-2"><img src={Card2}
                                                            alt="card-img"/></label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Card Number</label>
                                                <input type="text" value={cardNo} onChange={(event)=>setCardNo(event.target.value)} className="form-control" placeholder="xxxxxxxxxxxxxxxx"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Card Holder Name</label>
                                                <input type="text" value={cardHolder} onChange={(event)=>setCardHolder(event.target.value)} className="form-control" placeholder="Enter Name on the Card"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>Expiry Date</label>
                                                <input type="text" value={expiry} onChange={(event)=>setExpiry(event.target.value)} className="form-control date-picker" placeholder="Enter Expiry Date (MM/YY)"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <label>CVV Code</label>
                                                <input type="number" value={cvv} onChange={(event)=>setCVV(event.target.value)} className="form-control" placeholder="000"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="primary-btn primary-bg" onClick={()=>{bookTickets()}}>Confirm Booking</button>
                            </div>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-12'>
                    <div className='book-wrapper'>
                        <h3> Total Price </h3>
                        <div className='book-who-wrapper'>
                           <h4> Your Total Price Is :</h4>
                           <h5 className='text-center' style={{fontSize: '50px'}}> {price} </h5>   
                        </div>
                    </div>
                </div>
            </div>
        </div>

<div class="container">
    <div class="row">
        <div id="popup1" class="overlay" style={{
            display:showThankYouModal
        }}>
            <div class="popup">
                <h2>Thank You</h2>
                {/* <a class="close" onClick={()=>setShowThankYouModal(false)} >&times;</a> */}
                <div class="content">
                    Thank You For Your Purchase.<br/>You Will Recieve Tickets On Your Email.<br/>You Will Be Redirected To The Home Page.
                </div>
            </div>
        </div>


    </div>
</div>

    </div>
    )

}

export default Booking;