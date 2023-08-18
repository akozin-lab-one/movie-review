import React, { useEffect } from 'react'
import TVShow from './TVShow';
import { fetchTvshows } from './../redux/action/tvshows/index';
import { useDispatch } from 'react-redux';
import { api, api_key } from '../api';

const SubMain = () => {
    const dispatch = useDispatch();
    const getTvShows = async () =>{
        const resTV =  await api.get(`/tv/popular?api_key=${api_key}`)
        dispatch(fetchTvshows(resTV.data.results));
        console.log(resTV.data.results);
      }
    
      useEffect(()=>{getTvShows()}, []);
  return (
    <div>
        <TVShow/>
    </div>
  )
}

export default SubMain