import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Home.css'
import MovieCard from "./MovieCard";
const Home = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6bee6063439c1600f798008465dfec60&language=en-US&page=5"
    )
      .then((response) => response.json())
      .then((response) => setmovies(response.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(movies);

  return (
    <div>
    <Carousel
    showThumbs={false}
    autoPlay={true}
    transitionTime={3}
    infiniteLoop={true}
    showStatus={true}
    >
        {
            movies.map((movie) => (
                <div className="h-[430px]">
                    <div>
                    <img className="poster" src={` https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="" />
                    </div>
                    <div className="overlay text-white absolute bottom-0 p-8">
                        <h2 className="text-6xl max-w-[700px] text-left font-bold mt-2">{movie.title}</h2>
                        <p className="text-left mt-2">{movie.release_date}</p>
                        <p className="w-[500px] text-left text-sm mt-2">{movie.overview}</p>
                    </div>
                </div>
            ))
        }
    </Carousel>
        <h2 className="text-white text-2xl py-8 p-6">Popular Movies</h2>
        <div className="movies flex flex-wrap justify-center gap-5">
        {
          movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))
        }
        </div>
    </div>
  );
};

export default Home;
