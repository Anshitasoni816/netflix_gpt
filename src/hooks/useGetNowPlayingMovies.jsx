import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, TMDB_BASE } from "../utils/constant";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `${TMDB_BASE}movie/now_playing`,
      API_OPTIONS,
    );
    const movies = await data.json();
    console.log("now playing movies",movies)
    dispatch(addNowPlayingMovies(movies?.results));
  };

  useEffect(() => {
    if(!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useGetNowPlayingMovies;
