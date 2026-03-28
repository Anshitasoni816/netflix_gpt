import React from 'react'
 import  { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMoviesTrailer = (trailerVideoId) => {


const [trailerKey, setTrailerKey] = useState(null)

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${trailerVideoId}/videos`,
      API_OPTIONS,
    );

    const json = await data.json();
    console.log(json)
    
    const trailer = json.results.find((video) => video.type == "Trailer" || json.results[2])
    
    console.log(trailer);

    setTrailerKey(trailer?.key)
  };

useEffect(() => {
  if (trailerVideoId) getMovieTrailer();
}, [trailerVideoId]);

   return trailerKey;
}

export default useMoviesTrailer;
