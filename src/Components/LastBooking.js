import React, { useContext, useEffect } from 'react';
import { seats } from '../data';
import '../css/last.css';
import BsContext from '../context/BsContext';
const LastBooking = () => {
  const context = useContext(BsContext)

  const {handleGetBooking,lastBooking} = context
  

  useEffect(() => {
    handleGetBooking(); // Call the API to get last booking details
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='last_booking'>
      <h2 className='heading'>Last Booking</h2>
      {
        lastBooking ? (
          <>
          <div className='seat-container'>
        <p className='header'>Seats:</p>
        <ul className="seats">
              {seats.map((seat, index) => (
                // Display each seat and its count
                <li className="seat_value" key={index}>
                  {seat} : {Number(lastBooking.seats[seat])}
                </li>
              ))}
            </ul>
      </div>
      <p className='slots' style={{textAlign:"left"}}>Slot : {lastBooking.slot}<span></span></p>
      <p className='movie'> Movie : <span>{lastBooking.movie}</span></p>
          </>
        ) :(
          <p className='no_booking'>No Previous Booking</p>
        )
      }
      
    </div>
  )
}

export default LastBooking;