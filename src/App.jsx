import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Movielist from './Components/Movielist'
import Moviedetails from './Components/Moviedetails'
import Footer from './Components/Footer'
import SearchMovies from './Components/SearchMovies'
import { SearchContext } from './Components/SearchProvider'
const App = () => {
  const {search} = useContext(SearchContext)
  return (
    <div className='bg-black w-full h-full min-h-screen'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={ search.length > 0 ? <SearchMovies/> : <Home/>}></Route>
      <Route path='/Movies/:type' element={<Movielist/>}></Route>
      <Route path='/Movie/:id' element={<Moviedetails/>}></Route>
      {/* <Route path='/Search' element={<SearchMovies/>}></Route> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App