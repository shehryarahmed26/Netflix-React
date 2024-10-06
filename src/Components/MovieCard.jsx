import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "./SearchProvider";

const MovieCard = ({ movie }) => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <Link to={`/Movie/${movie.id}`}>
      <div onClick={() => setSearch('')} className="w-[100px] md:w-[200px] h-[150px] md:h-[300px] hover:scale-105 m-1  hover:shadow transition-all hover:z-10">
        <img
          className="rounded-lg"
          src={` https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt=""
        />
      </div>
    </Link>
  );
};

export default MovieCard;
