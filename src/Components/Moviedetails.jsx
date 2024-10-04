import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Moviedetails = () => {
  const {id} = useParams();
  const [movie, setmovie] = useState('')
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6bee6063439c1600f798008465dfec60&language=en-US&page=5`)
    .then((response) => response.json())
    .then((response) => setmovie(response.results))
    .catch((err) => console.error(err));
    console.log('movie-details>>', movie);
    
  }, [])
  return (
    <div>Moviedetails</div>
  )
}

export default Moviedetails