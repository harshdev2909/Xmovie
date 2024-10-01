import React, { useContext } from 'react';
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../css/Time.css'
import BsContext from '../context/BsContext';

const TimeSchedule = () => {
  const context = useContext(BsContext);

  const {time , ChangeTime} = context

  const handleChangetime = (val) => {
    ChangeTime(val)

    window.localStorage.setItem("time",val)
  }
  return (
    <>
    <div className='slot-container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main'>
        {slots.map((ele,index)=>{
          return  (
            <RadioComponent text={ele} key={index} changeSelection={handleChangetime} data={time}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule;