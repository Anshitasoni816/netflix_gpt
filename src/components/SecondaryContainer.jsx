import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import SkeletonRow from "./SkeletonRow";

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

  if (!nowPlayingMovies || !topRatedMovies || !upComingMovies || !popularMovies) {
    return (
      <div className="bg-black pb-20 md:pb-30 md:pt-12">
        <div className="md:-mt-40 md:z-10 md:relative">
          <SkeletonRow />
        </div>
        <SkeletonRow titleWidthClass="w-28" />
        <SkeletonRow titleWidthClass="w-24" />
        <SkeletonRow titleWidthClass="w-32" />
      </div>
    );
  }

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
