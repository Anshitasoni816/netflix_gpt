import React from "react";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Logo, SupportedLanguages } from "../utils/constant.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const user = useSelector((store) => store.user.data);
  const selectedLanguage = useSelector((store) => store.config.language);
  const isGptSearchPage = location.pathname === "/gptsearch";

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <nav className="absolute z-12 flex w-full max-w-full items-center justify-between bg-gradient-to-b from-black/100 via-black/60 to-black/20 px-3 py-3 md:px-25 md:py-2">
        <Link to={user ? "/browse" : "/login"}>
          <img className="h-12 md:h-20" src={Logo} alt="netflix-logo" />
        </Link>

        <div className="flex items-center justify-center gap-2 md:gap-5">
          {user ? (
            <div className="hidden items-center gap-2 md:flex md:gap-5">
              {isGptSearchPage && (
                <div className="flex p-2">
                  <select
                    className="bg-black px-3 py-1 text-white"
                    onChange={handleLanguageChange}
                    value={selectedLanguage}
                  >
                    {SupportedLanguages.map((lang) => (
                      <option value={lang.identifier} key={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {isGptSearchPage ? (
                <Link to="/browse">
                  <button className="rounded bg-red-600 px-4 font-medium text-white md:text-lg">
                    Home
                  </button>
                </Link>
              ) : (
                <Link to="/gptsearch">
                  <button className="rounded bg-red-600 px-4 text-sm font-medium text-white md:text-lg">
                    Gpt Search
                  </button>
                </Link>
              )}

              <button
                className="rounded bg-red-600 px-4 font-medium text-white md:text-lg"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="rounded px-2 font-medium text-white md:px-4 md:text-lg">
                Sign In
              </button>
            </Link>
          )}

          <div>
            {user ? (
              <img
                src={user?.photoURL}
                className="size-7 rounded object-cover md:size-8"
                alt="user profile"
              />
            ) : (
              <img
                className="size-7 rounded object-cover md:size-8"
                src="/userProfile.jpg"
                alt="profile icon"
              />
            )}
          </div>
        </div>
      </nav>

      {user && (
        <div className="fixed right-0 bottom-0 left-0 z-20 border-t border-white/10 bg-black/95 px-2 py-2 text-white backdrop-blur-sm md:hidden">
          <div className="grid grid-cols-4 items-center gap-2 text-center text-[11px]">
            <Link
              to="/browse"
              className={`rounded-lg px-2 py-2 ${
                !isGptSearchPage ? "bg-red-600 text-white" : "bg-white/10"
              }`}
            >
              Home
            </Link>

            <Link
              to="/gptsearch"
              className={`rounded-lg px-2 py-2 ${
                isGptSearchPage ? "bg-red-600 text-white" : "bg-white/10"
              }`}
            >
              Gpt Search
            </Link>

            <div
              className={`rounded-lg bg-white/10 px-2 py-1 ${
                isGptSearchPage ? "" : "opacity-60"
              }`}
            >
              <select
                className="w-full bg-transparent text-center text-[11px] text-white outline-none"
                onChange={handleLanguageChange}
                value={selectedLanguage}
                disabled={!isGptSearchPage}
              >
                {SupportedLanguages.map((lang) => (
                  <option
                    value={lang.identifier}
                    key={lang.identifier}
                    className="text-black"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="rounded-lg bg-white/10 px-2 py-2"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
