import React, { useRef } from "react";
import { Navbar, TextInput } from "flowbite-react";
import { api, api_key } from "./../api/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchmovies } from "../redux/action/movies";
import { useLocation } from "react-router";
import { fetchTvshows } from "../redux/action/tvshows";

const Header = () => {
  const dispatch = useDispatch();
  const UserInput = useRef("");
  console.log(UserInput);
  const location = useLocation();
  console.log(location.pathname);

  const getName = async () => {
    if (location.pathname === "/movies") {
      if (UserInput.current.value !== "") {
        const res = await api.get(
          `search/movie?query=${UserInput.current.value}&api_key=${api_key}`
        );
        dispatch(fetchmovies(res.data.results));
      } else {
        const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
        dispatch(fetchmovies(res.data.results));
      }
    } else if (location.pathname === "/tvshows") {
      
      if (UserInput.current.value !== "") {
        const res = await api.get(
          `search/tv?query=${UserInput.current.value}&api_key=${api_key}`
        );
        dispatch(fetchTvshows(res.data.results));
      } else {
        const res = await api.get(`/tv/popular?api_key=${api_key}`);
        dispatch(fetchTvshows(res.data.results));
      }
    }
  };
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Code-Lab Movies Channel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <form action="" className="flex items-center">
            <TextInput className="mr-1" ref={UserInput} />
            <button
              type="button"
              className="rounded-md bg-gray-900 text-white p-2"
              onClick={() => {
                getName();
              }}
            >
              Search
            </button>
          </form>
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link className="hover:bg-green-200" to={`/movies`}>
            <p>Movies</p>
          </Navbar.Link>
          <Navbar.Link to={`/tvshows`}>TV Shows</Navbar.Link> */}
          
          <Link className="hover:text-green-200" to="/movies" aria-label="Browse Movies">
            <span>Movies</span>
          </Link>
          <Link to="/tvshows" aria-label="Explore TV Shows">
            <span>TV Shows</span>
          </Link>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
