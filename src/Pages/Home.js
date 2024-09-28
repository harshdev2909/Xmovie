import React from 'react'
import SelectMovie from '../Components/SelectMovie'
import LastBooking from '../Components/LastBooking'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeat from '../Components/SelectSeat';
import '../css/Home.css'

const Home = () => {
  const handleBookNow = () =>{

  }
  
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='select_movie_component'>
        <SelectMovie/>
        </div>
        <div >
        <LastBooking/>
        </div>
        </div>
        <div className='time_seats'>
          <TimeSchedule/>
          <SelectSeat/>
         <button className='BN-btn' onClick={()=>{handleBookNow()}}>Book Now</button>
        </div>
    </div>
  )
}

export default Home