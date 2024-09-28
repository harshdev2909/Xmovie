import React, { useContext } from 'react'
import SelectMovie from '../Components/SelectMovie'
import LastBooking from '../Components/LastBooking'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeat from '../Components/SelectSeat';
import '../css/Home.css'
import BsContext from '../context/BsContext';

const Home = () => {
  const context = useContext(BsContext)
  const{
    movie,
    time,
    noofseat,
    handlePostBooking,
    setErrorMessgae,
    setErrorPopup
  } = context
  const handleBookNow = () =>{
    if(!movie){
      setErrorMessgae(true)
      setErrorPopup("Please Select a Movie")
    }else if (!time) {
      setErrorPopup(true);
      setErrorMessgae("Please select a time slot!");
    } else {
      //validation successfull
      handlePostBooking();
    }
  };

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
         <button className='BN-btn' onClick={() => {
                handleBookNow();
              }}>Book Now</button>
        </div>
    </div>
  )
}

export default Home