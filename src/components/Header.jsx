import React from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Header = ({ setQuery }) => {
  return (
    <header id="header__background">
      <div className="header__center">
        <img
          src="/assets/Flickfinder Logo.png"
          className="logo__img"
          alt="logo"
        />
        <Link to={"/"}>
          <h1 className="logo">🎬Flickfinder🍿</h1>
        </Link>
        <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-xl">
          <Searchbar setQuery={setQuery} />
        </div>
      </div>
    </header>
  );
};

export default Header;
