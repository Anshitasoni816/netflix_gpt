import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const topRatedMovies = await data.json();
    console.log("top Rated Movies", topRatedMovies);
    dispatch(addTopRatedMovies(topRatedMovies?.results));
  };

  useEffect(() => {
    if(!topRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
