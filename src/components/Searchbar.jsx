import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ setQuery }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchText.trim();
    if(query){
      //sent query to parent
      if(setQuery){
        setQuery(query)
      }
      navigate(`/search/${encodeURIComponent(query)}`)
    }
    // if (searchText.trim()) {
    //   navigate(`/search/${encodeURIComponent(searchText)}`);
    // }
    // // setQuery(searchText);
  };
  return (
    <div className="search__bar">
      <form
        id="search__form"
        onSubmit={handleSubmit}
        className="flex items-center gap-2 w-full"
      >
        <input
          type="text"
          id="search__input"
          placeholder="Search movies"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 rounded-md bg-white/10 text-white backdrop-blur w-full max-w-sm sm:placeholder:text-sm"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
