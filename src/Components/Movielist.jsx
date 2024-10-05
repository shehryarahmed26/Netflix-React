import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard';
import { Pagination } from 'antd';
const Movielist = () => {
  const [movies, setmovies] = useState([])
  const {type} = useParams();
  const [page, setpage] = useState(4)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=6bee6063439c1600f798008465dfec60&language=en-US&page=${page}`)
      .then((response) => response.json())
      .then((response) => setmovies(response.results))
      .catch((err) => console.error(err));
    
  }, [type, page])
  
  return (
    <div>
      <div className='flex flex-wrap px-2 gap-2 mx-auto justify-center'>
      {
        movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))
      }
    </div>
    <Pagination
        onChange={(e) => setpage(e)}
        className="py-4"
        align="center"
        defaultCurrent={1}
        total={100}
        showSizeChanger={false}
      />
    </div>
    
  )
}

export default Movielist