import React from "react";
import genAI from "../utils/genAI";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptSearchMovies } from "../utils/movieSlice";

const useGptSearchClick = (searchText) => {
    const dispatch = useDispatch()
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value;
    console.log(userQuery);
    if (!userQuery?.trim()) return;

    const prompt =
      'Act as a movie recommendation system and suggest some movies for the query: "' +
      userQuery +
      '". Only give me the names of 5 movies, comma separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

    try {
      const result = await genAI.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt,
      });

      const gptMovies = result.text.split(",").map((movie) => movie.trim());

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log("gptMovies", gptMovies);
      console.log("tmdbResults", tmdbResults);
      dispatch(addGptSearchMovies({tmdbResults, gptMovies}))
    } catch (error) {
      console.error("Gemini API error:", error);
    }
  };

  return handleGptSearchClick;
};

export default useGptSearchClick;
