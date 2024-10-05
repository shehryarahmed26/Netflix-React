import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const MovieCard = ({movie}) => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1500);
  }, [])
  return ( <div>
    { loading ? 
     <div className='w-[100px] md:w-[200px] h-[150px] md:h-[300px]'>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton height='100%'  width='100%' duration={2} />
  </SkeletonTheme> 
     </div>
    :
    <Link to={`/Movie/${movie.id}`}>
    <div className='w-[100px] md:w-[200px] h-[150px] md:h-[300px] hover:scale-[1.2]  hover:shadow-lg hover:shadow-gray-800 transition-all hover:z-10'>
    <img className='rounded-lg' src={` https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
    </div></Link>
    }
    </div>
  )
}

export default MovieCard