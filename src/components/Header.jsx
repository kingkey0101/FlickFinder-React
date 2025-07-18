import React from "react";

const Header = () => {
  return (
    <header id="header__background">
      <div className="header__center">
        <img
          src="./assets/Flickfinder Logo.png"
          className="logo__img"
          alt="logo"
        />
        <h1 className="logo">🎬Flickfinder🍿</h1>
        <div className="search__bar">
          <form id="search__form">
            <input
              type="text"
              id="search__input"
              placeholder="Search movies or TV shows..."
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
