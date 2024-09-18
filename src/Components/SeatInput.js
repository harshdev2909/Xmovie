import React from 'react'
import '../css/input.css'
const SeatInput = ({text,key}) => {
  return (
    <div className='form-check-label'>
    <span className='text'>{text}</span>
    <input type='number' className='seats-inputs' placeholder='0' max="30" min="0"/>                                                                                                                                                                                                                            
    </div>
  )
}

export default SeatInput