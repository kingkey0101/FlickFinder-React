import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ setQuery }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`search/${encodeURIComponent(searchText)}`);
    }
    // setQuery(searchText);
  };
  return (
    <div className="search__bar">
      <form
        id="search__form"
        onSubmit={handleSubmit}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          id="search__input"
          placeholder="Search movies"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/10 text-white backdrop-blur w-full max-w-sm "
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm text-black"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
