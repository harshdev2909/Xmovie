import React from 'react';
import { Routes, Route ,useLocation } from 'react-router-dom'; 
import Header from '../Components/static/Header'; 
import Hero from '../Components/static/Hero';
import Contact from '../Components/static/Contact'; 
import Home from '../Components/static/Home';

const Main = () => {
  const location = useLocation();
  return (
    <>
    
    <div>
      <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    {location.pathname === '/' && <Hero />}
    </>
  );
}

export default Main;
