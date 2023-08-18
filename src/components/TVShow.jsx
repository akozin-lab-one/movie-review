import React from 'react'
import { useSelector } from 'react-redux'
import TVShowCard from './TVShowCard';
import { Spinner } from "flowbite-react";

const TVShow = () => {
  const tvshows = useSelector(state => state.tvshows.tvshows);
  console.log(tvshows);
  return (
    <div className="container mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 ">
 
          {
            Array.isArray(tvshows) && tvshows.length !== 0 ? tvshows.map(tvshow => {return  <TVShowCard key={tvshow.id} tvshows={tvshow}/>}) : <Spinner aria-label="Extra large spinner example" className="flex justify-center h-screen bg-blue-600" size="xl" />
 
          }

      </div>
    </div>
  )
}

export default TVShow