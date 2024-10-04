import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    // const {title, backdrop_path, poster_path} = movie
  console.log(movie);
  
  return (
    <Link to={`/Movie/${movie.id}`}>
    <div className='w-[200px] h-[300px] hover:scale-[1.2]  hover:shadow-lg hover:shadow-gray-800 transition-all hover:z-10'>
        <img className='rounded-lg' src={` https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
    </div></Link>
  )
}

export default MovieCard