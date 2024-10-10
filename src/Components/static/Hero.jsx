import { Link } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
    <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span>
        Personalized Itineraries at Your FIngertips
    </h1>
    <p className='text-xl text-grey-500 text-center'>Your personal trip planner and travel curtor , creating custom itinearies tailored to youe interests and budget.</p>
    <Link to={'/'}>
        <button>Get Started</button>
    </Link>
    
</div>
  )
}

export default Hero