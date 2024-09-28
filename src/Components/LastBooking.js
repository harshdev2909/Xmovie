import React, { useContext } from 'react';
import { seats } from '../data';
import '../css/last.css';
import BsContext from '../context/BsContext';
const LastBooking = () => {
  const context = useContext(BsContext)

  const {movie , changeMovie} = context
  const {time , ChangeTime} = context
  const{noofseat,changeNoofseat} = context
  return (
    <div className='last_booking'>
      <h2 className='heading'>Last Booking</h2>
      <div className='seat-container'>
        <p className='header'>Seats:</p>
        <ul className="seats">
              {seats.map((seat, index) => (
                // Display each seat and its count
                <li className="seat_value" key={index}>
                  (seat) : 0
                </li>
              ))}
            </ul>
      </div>
      <p className='slots' style={{textAlign:"left"}}>Slot : {time}<span></span></p>
      <p className='movie'> Movie : <span>{movie}</span></p>
    </div>
  )
}

export default LastBooking;