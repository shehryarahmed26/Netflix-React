import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex px-10 justify-between items-center py-1 text-white'>
        
        <Link to={'/'}><img src="/Images/netflix.png" className='w-28' alt="" /></Link>
        <div className="links flex gap-5 text-sm items-center">
            <Link to='/Movies/popular'>
            <p>Popular</p>
            </Link>
            <Link to='/Movies/top_rated'>
            <p>Top Rated</p>
            </Link>
            <Link to='/Movies/upcoming'>
            <p>Upcoming</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header