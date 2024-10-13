
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate(); 
  const handleGetStarted = () => {
    navigate('/home'); // Navigate to the Home component
  };

  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
    <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span>
        Personalized Itineraries at Your FIngertips
    </h1>
    <p className='text-xl text-grey-500 text-center'>Your personal trip planner and travel curtor , creating custom itinearies tailored to your interests and budget.</p>
    
        <button onClick={handleGetStarted} className='bg-red-500 rounded p-2 text-white'>Get Started</button>
    
    
</div>
  )
}

export default Hero