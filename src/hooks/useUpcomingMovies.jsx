import React, { useEffect } from "react";
import { API_OPTIONS, TMDB_BASE } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpCommingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcommingMovies = useSelector((store) => store.movies.upcommingMovies)
  const getUpComingMovies = async () => {
    const data = await fetch(
      `${TMDB_BASE}movie/upcoming`,
      API_OPTIONS,
    );
    const UpComingMovies = await data.json();
    console.log("UpComing Movies", UpComingMovies);
    dispatch(addUpCommingMovies(UpComingMovies?.results));
  };

  useEffect(() => {
    if(!upcommingMovies) getUpComingMovies();
  }, []);
};

export default useUpcomingMovies;
