import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from './SearchProvider';
import MovieCard from './MovieCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SearchMovies = () => {
    const { search} = useContext(SearchContext);
    const [movies, setmovies] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    useEffect(() => {
      setloading(true)
       fetch(
`https://api.themoviedb.org/3/search/movie?api_key=6bee6063439c1600f798008465dfec60&language=en-US&query=${search}&page=${page}`)
        .then((response) => response.json())
        .then((response) => setmovies(response.results))
        .catch((err) => console.error(err));
        console.log(movies);
        setTimeout(() => {
          setloading(false)
        }, 2000);
        
        
    }, [search])
    return (
    <div className='flex flex-wrap min-h-screen justify-center'>
      {
        movies.map((movie) => (
          loading ? 
          <div className='w-[100px] md:w-[200px] h-[150px] md:h-[300px]'>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height='100%'  width='100%' duration={2} />
      </SkeletonTheme> 
         </div> :
          <MovieCard movie={movie}/>
        ))
      }
    </div>
  )
}

export default SearchMovies