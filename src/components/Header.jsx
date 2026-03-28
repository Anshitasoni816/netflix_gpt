import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import  {Logo } from "../utils/constant.js";
const Header = () => {
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
       console.log(error.message)
      });
  };

  return (
    <nav className="flex items-center justify-between py-2 px-2 md:px-25  bg-gradient-to-b from-black/100 via-black/60 to-black/20 absolute w-screen z-2">
      <div>
        <img
          className="md:h-20 h-12"
          src = {Logo }
          alt="netflix-logo"
        />
      </div>

      <div className="flex items-center justify-center md:gap-5 gap-2">
        <div>
          {user ? (
            <img src={user?.photoURL} className="md:size-8 size-6" alt="user profile" />
          ) : (
            <img className= "md:size-8 size-6" src="/userProfile.jpg"alt="profile icon" />
          )}
        </div>
        {user ? (
          <button className="font-medium text-white md:text-lg text-md bg-red-600 md:px-4 px-2 rounded" onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">
            <button className="font-medium text-white md:text-lg text-md md:px-4 px-2 rounded">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
