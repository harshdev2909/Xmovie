import React, { useContext } from 'react';
import { seats } from '../data';
import '../css/Seat.css';
import SeatInput from './SeatInput';
import BsContext from '../context/BsContext';

const SelectSeat = () => {
  const context = useContext(BsContext)
  const {noofseat,changeNoofseat} = context
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seat</h1>
      <div className='SS_main'>
        {seats.map((ele,index)=>{
          return (
            <SeatInput text={ele} key={index} noofseat={noofseat} changeNoofseat={changeNoofseat} />
          )
        })}
      </div>
    </div>
  )
}

export default SelectSeat;