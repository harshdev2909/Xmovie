import React from 'react';
import { Routes, Route ,useLocation } from 'react-router-dom'; 

import Home from './Home';

import { WavyBackgroundDemo } from '../comp/components/Background';
import { FocusCardsDemo } from '../comp/components/Cards';

const Main = () => {
  const location = useLocation();
  return (
    <div className='bg-black w-full'>
    <WavyBackgroundDemo/>
    <div className='mt-10 bg-black w-screen'>
    <FocusCardsDemo/>
    </div>
    {/* <Home/> */}
    </div>
  );
}

export default Main;
