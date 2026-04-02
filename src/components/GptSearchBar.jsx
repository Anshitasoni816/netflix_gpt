import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import genAI from "../utils/genAI";
import { API_OPTIONS } from "../utils/constant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.config?.language);
  const searchText = useRef(null);

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
    } catch (error) {
      console.error("Gemini API error:", error);
    }
  };

  return (
    <div className="bg-black w-1/2 mx-auto flex opacity-90">
      <form
        action=""
        className="p-5 flex w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
          className="outline-none bg-white flex-1 px-3 py-3 m-2 text-md rounded"
          ref={searchText}
        />

        <button
          className="text-white bg-red-700 px-12 py-2 m-2 font-medium rounded text-xl"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
