import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex px-5 md:px-10 justify-between items-center text-white'>
                <Link to={'/'}><img src="/Images/netflix.png" className='w-36 max-h-16' alt="" /></Link>
        <div className="links flex gap-5 text-sm items-center">
            <Link to='/Movies/popular'>
            <p className='text-sm md:text-lg hover:text-red-600 transition-all'>Popular</p>
            </Link>
            <Link to='/Movies/top_rated'>
            <p className='text-sm md:text-lg hover:text-red-600 transition-all'>Top Rated</p>
            </Link>
            <Link to='/Movies/upcoming'>
            <p className='text-sm md:text-lg hover:text-red-600 transition-all'>Upcoming</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header