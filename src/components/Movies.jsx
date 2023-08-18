import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { Spinner } from "flowbite-react";

const Movies = () => {
  const movies = useSelector(state => state.movies.movies);
  console.log(movies);
  return (
    <div className="container mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
 
          {
            movies.length !== 0 ? movies.map(movie => {return  <MovieCard key={movie.id} movies={movie}/>}) : <div className="flex justify-center items-center col-span-1 col-start-1 col-end-7 row-span-1 row-start-1 row-end-7 bg-green-400"><Spinner aria-label="Extra large spinner example" size="xl" /></div>
          }

      </div>
    </div>
  );
};

export default Movies;
