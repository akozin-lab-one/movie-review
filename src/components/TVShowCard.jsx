import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const TVShowCard = ({ tvshows }) => {
  return (
    <div>
      <div className="max-w-sm">
        <Link to={`/tvshows/detail/${tvshows.id}`}>
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${tvshows.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{tvshows.original_name}</p>
            </h5>

            {/* <p className="font-normal text-gray-700 dark:text-gray-400">
              {tvshows.overview.slice(0, 150)}
            </p> */}

            <div className="mr-4">
              <span className="bg-gray-900 text-white p-2 rounded-lg mr-4">
                <i className="fa-solid fa-star me-2"></i>
                {tvshows.vote_average}
              </span>
              <span className="bg-gray-900 text-white p-2 rounded-lg">
                <i className="fa-regular fa-calendar-days"></i>
                {tvshows.first_air_date}
              </span>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default TVShowCard;
