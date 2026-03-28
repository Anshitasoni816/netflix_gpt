import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const movies = await data.json();
    console.log(movies)
    dispatch(addNowPlayingMovies(movies?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useGetNowPlayingMovies;
