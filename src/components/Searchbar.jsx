import React from "react";


const Searchbar = () => {
  return (
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
  );
};

export default Searchbar;
