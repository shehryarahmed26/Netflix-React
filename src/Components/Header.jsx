import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext} from './SearchProvider';
import Search from 'antd/es/transfer/search';

const Header = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <nav className='flex px-5 md:px-10 justify-between items-center text-white'>
      <div className="left flex gap-5 " onClick={() => setSearch('')}> 
        <Link to={'/'}>
          <img onClick={() => setSearch('')} src="/Images/netflix.png" className='w-28 md:w-36 max-h-16' alt="Netflix Logo" />
        </Link>
        <div  className="links flex gap-5 text-sm items-center">
          <Link to='/Movies/popular'>
            <p onClick={() => setSearch('')} className='text-xs hidden md:block md:text-lg hover:text-red-600 transition-all'>Popular</p>
          </Link>
          <Link to='/Movies/top_rated'>
            <p onClick={() => setSearch('')} className='text-xs hidden md:block md:text-lg hover:text-red-600 transition-all'>Top Rated</p>
          </Link>
          <Link to='/Movies/upcoming'>
            <p onClick={() => setSearch('')} className='text-xs hidden md:block md:text-lg hover:text-red-600 transition-all'>Upcoming</p>
          </Link>
        </div>
      </div>
      <Link to={'/'}>
        <div className="right">
          <input
            value={search} onChange={(e) => setSearch(e.target.value)}
            className='bg-black border border-white rounded placeholder:font-light py-[2px] px-3 w-[100px] md:w-[200px] placeholder:text-xs md:placeholder:text-base py-0 placeholder:text-white'
            type="text"
            placeholder='Search Movies'
          />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
