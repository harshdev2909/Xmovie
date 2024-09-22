import React from 'react';
import { seats } from '../data';
import '../css/last.css';
const LastBooking = () => {
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
      <p className='slots' style={{textAlign:"left"}}>Slot : 00:00 AM<span></span></p>
      <p className='movie'> Movie : <span>Tenet</span></p>
    </div>
  )
}

export default LastBooking;