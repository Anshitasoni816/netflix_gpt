import React, { useRef, useState } from "react";
import { checkFormValidaton } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { Bg_URL, UserProfileImage } from "../utils/constant.js";

const EyeOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="size-5"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const EyeClosedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="size-5"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3l18 18M10.584 10.587A2.25 2.25 0 0012 16.5a2.25 2.25 0 001.414-.497M9.88 5.09A9.77 9.77 0 0112 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639a11.955 11.955 0 01-3.289 5.031M6.228 6.228a11.956 11.956 0 00-4.192 5.455 1.012 1.012 0 000 .639C3.423 16.493 7.36 19.5 12 19.5a11.95 11.95 0 005.272-1.224"
    />
  </svg>
);

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const password = useRef(null);
  const email = useRef(null);

  const changetoSignUpForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
    setShowPassword(false);
  };

  const handleButtonClick = async () => {
    const message = checkFormValidaton(
      email.current.value,
      password.current.value,
      isSignIn,
    );

    setErrorMessage(message);

    if (message) return;

    try {
      if (!isSignIn) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );

        const user = userCredential.user;

        const derivedDisplayName = email.current.value.split("@")[0];

        await updateProfile(user, {
          displayName: derivedDisplayName,
          photoURL: UserProfileImage,
        });

        await user.reload();

        const {
          uid,
          email: userEmail,
          displayName,
          photoURL,
        } = user;

        dispatch(
          addUser({
            uid,
            email: userEmail,
            displayName,
            photoURL,
          }),
        );
      } else {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
      }
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg_URL})` }}
    >
      <div className="flex min-h-screen items-start justify-center px-4 pt-28 pb-8 md:items-center md:px-0 md:pt-24">
        <div className="w-full max-w-md bg-black px-5 py-5 text-white opacity-75 md:w-4/12 md:max-w-lg md:px-15 md:py-15">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleButtonClick();
            }}
          >
            <h1 className="mb-3 rounded-md border border-amber-400/40 bg-amber-500/10 px-3 py-2 text-center text-sm font-semibold text-amber-200 md:text-base">
              Use VPN before Login / Signup
            </h1>
            <h2 className="mb-5 text-2xl font-bold md:text-3xl">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>

            <input
              ref={email}
              type="text"
              placeholder="Email or Phone number"
              className="my-4 w-full bg-gray-700 p-2"
            />

            <div className="relative my-4">
              <input
                ref={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-gray-700 p-2 pr-10"
              />

              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-200"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            </div>

            <p className="text-red-300">{errorMessage}</p>

            <button
              type="submit"
              className="mt-5 mb-10 w-full cursor-pointer rounded-md bg-red-600 p-2 text-center md:mb-15"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p className="px-2">
              {isSignIn ? "New to netflix" : "Already registered"}{" "}
              <span
                className="cursor-pointer border-b border-blue-500"
                onClick={changetoSignUpForm}
              >
                {isSignIn ? "Sign up now" : "Sign in now"}{" "}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
