import "../Carousel/Carousel.css"
import React, { useEffect, useState } from 'react'
import { api, api_key } from '../api';
import CarouselTContent from '../Carousel/CarouselTContent';
import DotsT from '../Carousel/DotsT';

const CarouselT = () => {
    const [tvseries, setTvSeries] = useState({});
    const upTvSeriesget = async () => {
      const res = await api.get(`/tv/popular?api_key=${api_key}`);
      console.log(res.data.results.slice(10, 15));
      setTvSeries(res.data.results.slice(10, 15));
      // dispatch(fetchupmovies(res.data.results.slice(0,5)))
    };
  
    useEffect(() => {
        upTvSeriesget();
    }, []);
    console.log(tvseries);
  
    const len = tvseries.length - 1;
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(()=>{
        const interval = setInterval(()=>{
            setActiveIndex(activeIndex === len ? 0 : activeIndex +1)
        }, 5000);
  
        return () => clearInterval(interval);
    }, [activeIndex])
  
  
    if (JSON.stringify(tvseries) !== "{}") {
      return (
        <div className="slider-container">
          <CarouselTContent
            tvseries={tvseries}
            activeIndex={activeIndex} />
          <DotsT
            activeIndex={activeIndex}
            tvseries={tvseries}
            onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
      );
    }
}

export default CarouselT