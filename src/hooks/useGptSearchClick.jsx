import { createGenAI } from "../utils/genAI";
import { API_OPTIONS, TMDB_BASE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptSearchMovies, clearGptSearchMovies, setGptLoading } from "../utils/movieSlice";

const useGptSearchClick = (searchText, apiKey) => {
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `${TMDB_BASE}search/movie&query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value;
    if (!userQuery?.trim()) return;
    if (!apiKey?.trim()) return;

    dispatch(clearGptSearchMovies());
    dispatch(setGptLoading(true));

    const prompt =
      'Act as a movie recommendation system and suggest some movies for the query: "' +
      userQuery +
      '". Only give me the names of 5 movies, comma separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

    try {
      const genAI = createGenAI(apiKey);
      const result = await genAI.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt,
      });

      const gptMovies = result.text.split(",").map((movie) => movie.trim());

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptSearchMovies({ tmdbResults, gptMovies }));
    } catch (error) {
      console.error("Gemini API error:", error);
    } finally {
      dispatch(setGptLoading(false));
    }
  };

  return handleGptSearchClick;
};

export default useGptSearchClick;
