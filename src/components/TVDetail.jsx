import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { deselecttvshows, selectTvshows } from "../redux/action/tvshows";
import { Card, Spinner } from "flowbite-react";

const TVDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tvshowId } = useParams();
  console.log(tvshowId);

  const tvdetailget = async () => {
    const res = await api.get(`tv/${tvshowId}?api_key=${api_key}`);
    console.log(res.data);
    dispatch(selectTvshows(res.data));
  };

  useEffect(() => {
    if (tvshowId) {
      tvdetailget();
    }

    return () => dispatch(deselecttvshows({}));
  }, []);

  const tvshow = useSelector((state) => state.tvshows.tvshow);

  console.log(tvshow);
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
              onClick={() => navigate("/tvshows")}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </p>
          </div>
          {JSON.stringify(tvshow) !== {} ? (
            [
              // <Card
              //   imgAlt="Meaningful alt text for an image that is not purely decorative"
              //   imgSrc={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
              // >
              //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              //     <p>{tvshow.original_name}</p>
              //   </h5>
              //   <div className="font-normal text-gray-700 dark:text-gray-400">
              //     <p>{tvshow.overview}</p>
              //   </div>

              //   <div>
              //     <span className="bg-gray-900 text-white p-2 rounded-lg">
              //       <i class="fa-solid fa-check mr-2"></i>
              //       {tvshow.status}
              //     </span>
              //     <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
              //     <i class="fa-solid fa-users-line mr-2"></i>
              //       {tvshow.popularity}
              //     </span>
              //     <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
              //     <i class="fa-regular fa-calendar-days mr-2"></i>
              //       {tvshow.first_air_date}
              //     </span>
              //     {/* <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
              //     <i class="fa-solid fa-volume-high"></i>
              //     {tvshow.spoken_languages[0]}
              //     </span> */}
              //   </div>
              // </Card>,
              <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-3 gap-0  p-6">
                  <div className="bg-gray-200 flex justify-center items-center rounded-l-lg p-1">
                    <img
                      className="w-1/2 md:w-1/4 lg:w-1/6"
                      src={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-300 col-span-2 rounded-r-lg p-4">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>{tvshow.original_name}</p>
                    </h5>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                      <p>{tvshow.overview}</p>
                    </div>

                    <div className="mt-4">
                      <span className="bg-gray-900 text-white p-2 rounded-lg">
                        <i className="fa-solid fa-check mr-2"></i>
                        {tvshow.status}
                      </span>
                      <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
                        <i className="fa-solid fa-users-line mr-2"></i>
                        {tvshow.popularity}
                      </span>
                      <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
                        <i className="fa-regular fa-calendar-days mr-2"></i>
                        {tvshow.first_air_date}
                      </span>
                      {/* {tvshow.spoken_languages[0]} */}
                      {/* <span className="bg-gray-900 text-white p-2 rounded-lg ml-2">
                        <i class="fa-solid fa-volume-high"></i>
                        {tvshow.spoken_languages[0].name}
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>,
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

export default TVDetail;
