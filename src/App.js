import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import BsState from './context/BsState';
import Main from './Pages/Main'; 
import Routes from './Pages/Routes';

const App = () => {
  return (
    <BrowserRouter> 
      <BsState>
        <Main />
        {/* <Routes/> */}
      </BsState>
    </BrowserRouter>
  );
}

export default App;
