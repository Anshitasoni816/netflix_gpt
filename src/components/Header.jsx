import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between md:mx-40 mx-3 py-2">
      <div>
        <img
          className="md:h-20 h-12"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>

      <div>
        <Link to="/login">
         <button  className="font-medium text-white md:text-lg text-md bg-red-600 md:px-4 px-2 rounded">
          Sign In
         </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
