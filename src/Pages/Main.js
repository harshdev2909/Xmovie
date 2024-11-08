import React from 'react';
import { Routes, Route ,useLocation } from 'react-router-dom'; 

import Home from './Home';
import { NavbarDemo } from '../comp/components/Navbar';

const Main = () => {
  const location = useLocation();
  return (
    <>
    <NavbarDemo/>
    <Home/>
    </>
  );
}

export default Main;
