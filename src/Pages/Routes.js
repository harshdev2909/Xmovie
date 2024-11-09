import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

const Routes = () => {
  return (
    <>
    <Routes>
      <Route path="book" element={<Home/>} />
    </Routes>
    </>
  )
}

export default Routes