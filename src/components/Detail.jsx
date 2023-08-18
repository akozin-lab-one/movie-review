import React, { useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { deSelectmovies, selectmovies } from "../redux/action/movies";

const Detail = () => {
  const navigate = useNavigate();

  const { movieid } = useParams();
  console.log(movieid);

  const dispatch = useDispatch();

  const getmovie = async () => {
    const res = await api.get(`movie/${movieid}?api_key=${api_key}`);
    console.log(res.data);
    dispatch(selectmovies(res.data));
  };

  useEffect(() => {
    if (movieid) {
      getmovie();
    }

    return () => dispatch(deSelectmovies({}));
  }, []);

  const movie = useSelector((state) => state.movies.movie);

  const total = movie.runtime;
  const hours = Math.floor(total/60);
  const remainSec = total % 3600;
  const minutes = Math.floor(remainSec/60);



  console.log(movie);

  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          <div>
            <p
              style={{
                cursor: "pointer",
                "font-size": "30px",
              }}
              onClick={() => navigate("/")}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </p>
          </div>
          {JSON.stringify(movie) !== {} ? (
            [
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>{movie.title}</p>
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <p>{movie.overview}</p>
                </div>

                <div>
                  <span className="bg-gray-900 text-white p-2 rounded-lg">
                    <i class="fa-solid fa-check mr-2"></i>
                    {movie.status}
                  </span>
                  <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
                  <i class="fa-solid fa-users-line mr-2"></i>
                    {movie.popularity}
                  </span>
                  <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
                  <i class="fa-regular fa-calendar-days mr-2"></i>
                    {movie.release_date}
                  </span>
                  <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
                  <i class="fa-solid fa-video mr-2"></i>
                  {
                hours + ':' + minutes
              }
                  </span>
                </div>
              </Card>,
            ]
          ) : (
            <div className="text-center">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
