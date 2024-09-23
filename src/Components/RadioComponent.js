import React from 'react';
import '../css/Radio.css'
const RadioComponent = ({text,key}) => {
  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
    </div>
  )
}

export default RadioComponent;