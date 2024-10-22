import React from 'react';
import { BrowserRouter} from 'react-router-dom';
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
