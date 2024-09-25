import React from 'react';
import { seats } from '../data';
import '../css/Seat.css';
import SeatInput from './SeatInput';

const SelectSeat = () => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seat</h1>
      <div className='SS_main'>
        {seats.map((ele,index)=>{
          return (
            <SeatInput text={ele} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default SelectSeat;