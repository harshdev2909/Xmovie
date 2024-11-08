import React from 'react';
import { Routes, Route ,useLocation } from 'react-router-dom'; 

import Home from './Home';

import { WavyBackgroundDemo } from '../comp/components/Background';

const Main = () => {
  const location = useLocation();
  return (
    <>
    <WavyBackgroundDemo/>
    {/* <Home/> */}
    </>
  );
}

export default Main;
