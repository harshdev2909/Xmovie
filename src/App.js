import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import BsState from './context/BsState';
import Main from './Pages/Main'; 

const App = () => {
  return (
    <BrowserRouter> 
      <BsState>
        <Main />
      </BsState>
    </BrowserRouter>
  );
}

export default App;
