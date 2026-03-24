import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
       console.log(error.message)
      });
  };

  return (
    <nav className="flex items-center justify-between md:mx-40 mx-3 py-2">
      <div>
        <img
          className="md:h-20 h-12"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>

      <div className="flex items-center justify-center md:gap-5 gap-2">
        <div>
          {user ? (
            <img src={user.photoURL} className="md:size-8 size-6" alt="user profile" />
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
