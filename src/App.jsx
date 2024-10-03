import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Movielist from './Components/Movielist'
import Moviedetails from './Components/Moviedetails'

const App = () => {
  return (
    <div className='bg-black w-full h-screen'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Movies/:type' element={<Movielist/>}></Route>
      <Route path='/Movie/:id' element={<Moviedetails/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App