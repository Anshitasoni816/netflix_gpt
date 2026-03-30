import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useGetNowPlayingMovies()
  useGetPopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
