import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from './SearchProvider';
import MovieCard from './MovieCard';

const SearchMovies = () => {
    const { search} = useContext(SearchContext);
    const [movies, setmovies] = useState([])
    const [page, setpage] = useState(1)
    useEffect(() => {
       
       fetch(
`https://api.themoviedb.org/3/search/movie?api_key=6bee6063439c1600f798008465dfec60&language=en-US&query=${search}&page=${page}`)
        .then((response) => response.json())
        .then((response) => setmovies(response.results))
        .catch((err) => console.error(err));
        console.log(movies);
        
        
    }, [search])
    return (
    <div className='flex flex-wrap min-h-screen'>
      {
        movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))
      }
    </div>
  )
}

export default SearchMovies