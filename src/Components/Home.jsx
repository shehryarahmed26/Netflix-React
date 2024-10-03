import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Home.css'
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
                <div className="h-[330px]">
                    <div>
                    <img className="poster" src={` https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="" />
                    </div>
                    <div className="overlay text-white absolute bottom-14 p-8">
                        <h2 className="text-3xl max-w-[300px] text-left font-bold">{movie.title}</h2>
                        <p className="text-left">{movie.release_date}</p>
                        <p className="w-[500px] text-left text-xs">{movie.overview}</p>
                    </div>
                </div>
            ))
        }
    </Carousel>
    </div>
  );
};

export default Home;
