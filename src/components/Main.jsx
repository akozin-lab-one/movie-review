import React, { useEffect } from "react";
import Movies from "./Movies";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchmovies } from "../redux/action/movies";


const Main = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchmovies(res.data.results));
    // console.log(res.data.results);
  };

  useEffect(() => {getMovies()}, []);


  return (
    <div>
      <Movies />
    </div>
  );
};

export default Main;
