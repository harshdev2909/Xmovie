import React from 'react'
import { moviesList } from '../data'
import RadioComponent from './RadioComponent'
import '../css/SelectMovie.css'
const SelectMovie = () => {
  return (
    <>
    <h1 className='SM_heading'>Select A Movie :-</h1>
    <div className='SM_main_container'>
        {moviesList.map((ele,index)=>{
            return (
                <RadioComponent text={ele} key={index}/>
            )
        })}
    </div>    
    </>
  )
}

export default SelectMovie