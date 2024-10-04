import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard';
const Movielist = () => {
  const [movies, setmovies] = useState([])
  const {type} = useParams();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=6bee6063439c1600f798008465dfec60&language=en-US&page=5`)
      .then((response) => response.json())
      .then((response) => setmovies(response.results))
      .catch((err) => console.error(err));
    
  }, [type])
  
  return (
    <div className='flex flex-wrap px-2 gap-2 mx-auto justify-center'>
      {
        movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))
      }
    </div>
  )
}

export default Movielist