import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.css";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
  const [loading, setloading] = useState(true)
  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(2);
  useEffect(() => {
    setloading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=6bee6063439c1600f798008465dfec60&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((response) => setmovies(response.results))
      .catch((err) => console.error(err));
      setTimeout(() => {
        setloading(false)
      }, 2000);
      
  }, [page]);
  console.log(movies);
  console.log("page", page);

  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={true}
      >
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            {" "}
            <div className="h-[300px] md:h-[460px]">
              <div>
                <img
                  className="poster"
                  src={` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="overlay text-white absolute bottom-0 md:bottom-0 p-8 overflow-hidden">
                <h2 className="text-2xl md:text-6xl max-w-[700px] text-left font-bold mt-2">
                  {movie.title}
                </h2>
                <p className="text-left mt-2">{movie.release_date}</p>
                <p className="w-[300px] md:w-[500px] text-left max-h-8 overflow-hidden md:max-h-none text-xs md:text-sm mt-2">
                  {movie.overview.slice(0, 118)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <h2 className="text-white text-2xl py-3 md:py-8 p-6">Popular Movies</h2>
      <div className="movies flex flex-wrap justify-center gap-2 px-2">
        {movies.map((movie) => (
          loading ? 
          <div className='w-[100px] md:w-[200px] h-[150px] md:h-[300px]'>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton height='100%'  width='100%' duration={2} />
      </SkeletonTheme> 
         </div> :
          <MovieCard movie={movie} />
        ))}
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
  );
};

export default Home;
