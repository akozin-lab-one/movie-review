import React from 'react';
import Header from './components/Header';
import './App.css'
import Main from './components/Main';
import { Route, Routes } from 'react-router';
import Detail from './components/Detail';
import SubMain from './components/SubMain';
import TVDetail from './components/TVDetail';

const App = () => {
    return ( <
        div >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/movie-review/"
        element = { < Main / > }
        / >        <
        Route path = "/movie-review/movies"
        element = { < Main / > }
        / ><
        Route path = "/movie-review/movies/detail/:movieid"
        element = { < Detail / > }
        / ><
        Route path = "/movie-review/tvshows"
        element = { < SubMain / > }
        / ><
        Route path = "/movie-review/tvshows/detail/:tvshowId"
        element = { < TVDetail / > }
        / > < /
        Routes > < /
        div >
    )
}

export default App