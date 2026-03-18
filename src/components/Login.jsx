import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isSignIn, setIsSignIn] = useState(false)

const changetoSignUpForm = () => {
      setIsSignIn(!isSignIn)
}

  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_small.jpg)] bg-cover min-h-screen bg-center">
      <div className="bg-gradient-to-b from-black/100 via-black/5 to-black/70 min-h-screen">
        <Header />
      </div>

      <div className="bg-black absolute top-40 md:w-3/12 w-10/12 mx-auto right-0 left-0 md:px-10 px-5 md:py-15 py-5 text-white opacity-75">
        <form action="">
          <h2 className="md:text-3xl text-2xl font-bold mb-5"> {isSignIn ? "Sign In" : "Sign Up"} </h2>

          <input
            type="text"
            placeholder="Email or Phone number"
            className="p-2 my-4 bg-gray-700 w-full"
          />

          <input
            type="text"
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-700"
          />

          <button className="p-2 mt-5 mb-15 text-center bg-red-600 rounded-md w-full cursor-pointer">

           {isSignIn ? "Sign In" : "Sign Up"} 

          </button>

          <p className="px-2">{isSignIn ? "New to netflix" : "Already registered"} <span 
          className="border-b border-blue-500 cursor-pointer"
          onClick={changetoSignUpForm}> {isSignIn ? "Sign up now" : "Sign in now"} </span></p>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
