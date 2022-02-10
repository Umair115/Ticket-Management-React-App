import React from "react";
import SeatImg from '../images/chair-img1.png';
const Seats = (props) => {

    const [seats, setSeats] = React.useState([]);
    const [availableSeat, setAvailableSeat] = React.useState([]);
    const [selectedSeat, setSelectedSeat] = React.useState([]);
    const [reservedSeat, setReservedSeat] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

 
    async function getSeats(){
        const url = '/api/seats/'+props.item.movie_name;
        let response = await fetch(url);
        let data = await response.json();
        let _seats = data.seats;
        _seats.forEach(seat => {
            if(seat.available == 'available'){
                availableSeat.push({id: seat.row_no+seat.seat_name , seat:seat})
            }
            else if(seat.available == 'reserve'){
                reservedSeat.push({id: seat.row_no+seat.seat_name , seat:seat})
            }
        });
        setSeats(data.seats);
        setLoading(false);
    }


    function checkSeatStatus(seat){
        
            console.log(availableSeat,"available")    
            console.log(reservedSeat,"reserve")    
            console.log(selectedSeat,"select")    

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
        
    }

    React.useEffect(()=>{
        getSeats()
        
    },[])
    
    return(
        <div className="bg-dark">
            <h3 className="text-uppercase">Book Your Seats Now</h3>
            {
                loading ? "Loading" : 
                <div className="book-who-wrapper mc-b-5">
                            <h4>{props.item['movie_name']}</h4>
                            {/* <p className="text-light">Note : You can select max 6 tickets at a time</p> */}
                            <form action="#" className="seat-table">
                                <div className="row">
                                    {props.type == 'match' ? <div className="col-lg-4">
                                        <div className="form-group">
                                            <label for="category">Select Category</label>
                                            <select name="" id="" className="form-control">
                                                <option value="Classic">Classic</option>
                                                <option value="Premier">Premier</option>
                                                <option value="Gold">Gold</option>
                                            </select>
                                        </div>
                                    </div> : null}
                                    
                                    {props.type == 'match' ? <div className="col-lg-4">
                                        <div className="form-group">
                                            <label for="category">Select Stadium</label>
                                            <select name="" id="" className="form-control">
                                                <option value="National Stadium">National Stadium</option>
                                                <option value="Gaddafi Stadium">Gaddafi Stadium</option>
                                                <option value="Iqbal Stadium">Iqbal Stadium</option>
                                            </select>
                                        </div>
                                    </div> : null}
                                    {props.type == 'movie' ? <div className="col-lg-4">
                                        <div className="form-group">
                                            <label for="category">Select Cinema</label>
                                            <select name="" id="" className="form-control">
                                                <option value="Cinema1">Cinema 1</option>
                                                {/* <option value="Nueplex Cinemas DHA">Nueplex Cinemas DHA</option>
                                                <option value="Capri Cinema">Capri Cinema</option> */}
                                            </select>
                                        </div>
                                    </div>  : null}
                                    
                                </div>
                                <ul>
                                    <li>
                                        <div className="form-group">
                                        
                                            {
                                                seats.map(seat => {
                                                  

                                                       return (
                                                           <div className="text-light" style={{display:'inline'}} onClick={()=>{
                                                               selectedSeat.push(availableSeat.find((item) => item.id === seat.row_no+seat.seat_name))
                                                               setAvailableSeat(availableSeat.filter((item) => item.id !== seat.row_no+seat.seat_name))
                                                               
                                                           }}>
                                                               
                                                            <img src={SeatImg} style={{backgroundColor:checkSeatStatus(seat) , margin: 3, padding: 20}} width={100} height={100} alt="Chair Image"/>
                                                               
                                                           </div>
                                                       )
                                                   
                                                   
                                                })
                                            }
                                            
                                        </div>
                                    </li>
                                    
                                </ul>
                            </form>
                        </div>
            }
                        <p className="text-light" onClick={()=>{
                            selectedSeat.map((seat) => seat ? availableSeat.push(seat) : null)
                            setSelectedSeat([])
                            
                        }}>Undo</p>
        </div>
    )
}

export default Seats;