import React from 'react'
import Home from './Pages/Home'
import BsState from './context/BsState'
import Main from './Pages/Main'

const App = () => {
  return (
    <div>
      <BsState>
      {/* <Home/> */}
      <Main/>
      </BsState>
    </div>
  )
}

export default App