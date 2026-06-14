import React from 'react'
 import  { useEffect, useState } from "react";
import { API_OPTIONS, TMDB_BASE } from "../utils/constant";

const useMoviesTrailer = (trailerVideoId) => {


const [trailerKey, setTrailerKey] = useState(null)

  const getMovieTrailer = async () => {
    const data = await fetch(
      `${TMDB_BASE}movie/${trailerVideoId}/videos`,
      API_OPTIONS,
    );

    const json = await data.json();
    console.log("trailer videos",json)
    
    const trailer = json.results.find((video) => video.type == "Trailer" || json.results[2])
    
    console.log("most popular trailer",trailer);

    setTrailerKey(trailer?.key)
  };

useEffect(() => {
  if (trailerVideoId) getMovieTrailer();
}, [trailerVideoId]);

   return trailerKey;
}

export default useMoviesTrailer;
