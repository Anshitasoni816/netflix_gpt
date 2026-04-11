import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import useGptSearchClick from "../hooks/useGptSearchClick";

const GptSearchBar = ({ apiKey }) => {
  const langKey = useSelector((store) => store?.config?.language);
  const gptLoading = useSelector((store) => store?.movies?.gptLoading);
  const searchText = useRef(null);

  const handleGptSearchClick = useGptSearchClick(searchText, apiKey);

  return (
    <div className="mx-auto flex w-full max-w-4xl px-3 opacity-90 md:w-1/2 md:px-0">
      <form
        action=""
        className="flex w-full flex-col gap-3 bg-black p-3 md:flex-row md:p-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceHolder}
          className="m-0 flex-1 rounded bg-white px-3 py-3 text-md outline-none"
          ref={searchText}
        />

        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
          <button
            className="rounded bg-red-700 px-6 py-3 text-base font-medium text-white md:px-12 md:py-2 md:text-xl"
            onClick={handleGptSearchClick}
            disabled={!apiKey || gptLoading}
          >
            {lang[langKey]?.search}
          </button>
          {gptLoading ? (
            <span className="text-xs text-white/70">Searching…</span>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
