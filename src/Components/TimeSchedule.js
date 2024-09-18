import React from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../css/Time.css'

const TimeSchedule = () => {
  return (
    <>
    <div className='slot-container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main'>
        {slots.map((ele,index)=>{
          return  (
            <RadioComponent text={ele} key={index}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule