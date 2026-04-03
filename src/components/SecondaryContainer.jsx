import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies,
  );

   const topRatedMovies = useSelector(
    (store) => store?.movies?.topRatedMovies,
  );

  const upComingMovies = useSelector(
    (store) => store?.movies?.upComingMovies,
  ); 

  const popularMovies = useSelector(
    (store) => store?.movies?.popularMovies,
  );

  if (!nowPlayingMovies) return null;
  if (!topRatedMovies) return null;
  if (!upComingMovies) return null;
  if (!popularMovies) return null;

  console.log("secondary container now playing movies", nowPlayingMovies);

  console.log("secondary container top rated playing movies", topRatedMovies);

  console.log("secondary container popular movies", popularMovies);

  console.log("secondary container upcomming movies", upComingMovies);

  return (
    <div className="bg-black pb-20 md:pb-30 md:pt-12">
      <div className="md:-mt-40 md:z-10 md:relative">
        <MoviesList title={"Now Playing Movies"} movies={nowPlayingMovies} />
      </div>
      <MoviesList title={"Top Rated"} movies={topRatedMovies} />
      <MoviesList title={"Popular"} movies={popularMovies} />
      <MoviesList title={"Upcoming Movies"} movies={upComingMovies} />
      {/* <MoviesList title={"Horror"} movies={nowPlayingMovies} /> */}
    </div>
  );
};

export default SecondaryContainer;
