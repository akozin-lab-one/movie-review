import "../Carousel/Carousel.css"
import React, { useEffect, useState } from "react";
import CarouselContent from "../Carousel/CarouselContent";
import { api, api_key } from "../api";
import Dots from "../Carousel/Dots";

const CarouselM = () => {
  const [movies, setMovies] = useState({});
  const upMovieget = async () => {
    const res = await api.get(`/movie/popular?api_key=${api_key}`);
    console.log(res.data.results.slice(10, 15));
    setMovies(res.data.results.slice(10, 15));
    // dispatch(fetchupmovies(res.data.results.slice(0,5)))
  };

  useEffect(() => {
    upMovieget();
  }, []);
  console.log(movies);


  const len = movies.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(()=>{
      const interval = setInterval(()=>{
          setActiveIndex(activeIndex === len ? 0 : activeIndex +1)
      }, 5000);

      return () => clearInterval(interval);
  }, [activeIndex])


  if (JSON.stringify(movies) !== "{}") {
    return (
      <div className="slider-container">
        <CarouselContent 
          movies={movies}
          activeIndex={activeIndex} />
        <Dots
          activeIndex={activeIndex}
          movies={movies}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
          />
      </div>
    );
  }
};

export default CarouselM;
