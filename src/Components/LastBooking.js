import React, { useContext, useEffect } from 'react';
import { seats } from '../data';
import '../css/last.css';
import BsContext from '../context/BsContext';
const LastBooking = () => {
  const context = useContext(BsContext)

  const {movie , changeMovie,handleGetBooking,lastBooking} = context
  const {time , ChangeTime} = context
  const{noofseat,changeNoofseat} = context

  useEffect(()=>{
    handleGetBooking()
  },[])
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
                  (seat) : {Number(lastBooking.seats[seat])}
                </li>
              ))}
            </ul>
      </div>
      <p className='slots' style={{textAlign:"left"}}>Slot : {lastBooking.time}<span></span></p>
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