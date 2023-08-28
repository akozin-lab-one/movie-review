import React, { useEffect } from "react";
import Movies from "./Movies";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchmovies } from "../redux/action/movies";
import Footer from "./Footer";
import CarouselM from "./CarouselM";

const Main = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchmovies(res.data.results));
    // console.log(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <CarouselM/>
      <Movies />
      <div className="my-3">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
