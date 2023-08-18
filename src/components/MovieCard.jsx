import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MovieCard = ({ movies }) => {
  console.log(movies);
  return (
    <div className="max-w-sm">
      <Link to={`/movies/detail/${movies.id}`}>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={`https://image.tmdb.org/t/p/w500/${movies.poster_path}` }
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{movies.title}</p>
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {movies.overview.slice(0,150)}
          </p>

          <div className="mr-4">
            <span className="bg-gray-900 text-white p-2 rounded-lg mr-4">
              <i className="fa-solid fa-star me-2"></i>
              {movies.vote_average}
            </span>
            <span className="bg-gray-900 text-white p-2 rounded-lg">
              <i class="fa-regular fa-calendar-days"></i> {movies.release_date}
            </span>
            
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
