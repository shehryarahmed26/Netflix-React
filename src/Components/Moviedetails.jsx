import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Moviedetails = () => {
  const {id} = useParams();
  const [movie, setmovie] = useState('')
  const {genres } = movie
  useEffect(() => {
    window.scrollTo(0, 0)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6bee6063439c1600f798008465dfec60&language=en-US&page=5`)
    .then((response) => response.json())
    .then((response) => setmovie(response))
    .catch((err) => console.error(err));
    // console.log('movie-details>>', movie);
    console.log(movie);
  }, [])
  
  return (
    <div className='h-screen relative w-full'>
      <div className="cover  h-[200px] md:h-[400px]  w-[95%] md:w-[80%] mx-auto">
      <img className='h-[100%] w-[100%] object-cover' src={` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
      </div>
      <div className="cover-ovelay flex justify-center gap-5 absolute bottom-12 md:bottom-12">
        <div className="poster w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
          <img src={` https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
        </div>
        <div className="details text-white flex flex-col gap-2 max-w-[50%]">
          <h2 className='text-xl font-bold drop-shadow-xl'>{movie.title}</h2>
          <p className='drop-shadow-xl'>{movie.tagline}</p>
          <p className='drop-shadow-xl'>Rating: {movie.vote_average}</p>
          <p className='drop-shadow-xl'>Duration: {movie.runtime}mins</p>
          <p className='drop-shadow-xl'>Release date: {movie.release_date}</p>
          <div className='category flex gap-4 flex-wrap'>
            { genres ? genres.map((gen) => (
              <p className='border rounded-xl px-4 text-xs md:text-sm'>{gen.name}</p>
            )) : ''}
            </div>
          <div className="description bg-black pt-3">
            <h3 className='text-2xl font-bold'>Overview</h3>
            <p className='text-xs md:text-sm'>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moviedetails