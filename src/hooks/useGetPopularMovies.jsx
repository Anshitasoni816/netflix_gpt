import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS,
    );
    const popularMovies = await data.json();
    console.log("popular Movies", popularMovies);
    dispatch(addPopularMovies(popularMovies?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useGetPopularMovies;
