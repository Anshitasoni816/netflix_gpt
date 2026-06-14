import React, { useEffect } from "react";
import { API_OPTIONS, TMDB_BASE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
const useGetPopularMovies = () => {
  const dispatch = useDispatch();
   const getPopularmovies = useSelector((store) => store.movies.popularMovies)

  const getPopularMovies = async () => {
    const data = await fetch(
      `${TMDB_BASE}movie/popular`,
      API_OPTIONS,
    );
    const popularMovies = await data.json();
    console.log("popular Movies", popularMovies);
    dispatch(addPopularMovies(popularMovies?.results));
  };

  useEffect(() => {
    if(!getPopularmovies) getPopularMovies();
  }, []);
};

export default useGetPopularMovies;
