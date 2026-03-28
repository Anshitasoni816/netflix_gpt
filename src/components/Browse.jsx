import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useGetNowPlayingMovies()

  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
