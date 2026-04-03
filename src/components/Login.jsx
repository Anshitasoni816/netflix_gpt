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

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const password = useRef(null);
  const email = useRef(null);

  const changetoSignUpForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
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
            <h2 className="mb-5 text-2xl font-bold md:text-3xl">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>

            <input
              ref={email}
              type="text"
              placeholder="Email or Phone number"
              className="my-4 w-full bg-gray-700 p-2"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="my-4 w-full bg-gray-700 p-2"
            />

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
