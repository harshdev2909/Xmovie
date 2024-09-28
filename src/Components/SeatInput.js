import React from 'react'
import '../css/input.css';
const SeatInput = ({text,key,noofseat,changeNoofseat}) => {

  const change_seats = (e) =>{
    changeNoofseat({...noofseat,[e.target.name]:Number(e.target.value)})
 
  window.localStorage.setItem(
    "seats" ,
    JSON.stringify({
      ...noofseat,
      [e.target.name]:Number(e.target.value)
    })

  )
  }
  return (
    <div className='form-check-label'>
    <span className='text'>{text}</span>
    <input type='number' className='seats-inputs' placeholder='0' max="30" min="0" 
    name={text} onChange={change_seats} value={noofseat[text]} />                                                                                                                                                                                                                            
    </div>
  )
}

export default SeatInput;