import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="p-4">
      <Header />
      <h2 className="text-xl text-white mb-4">Search Results for '{query}'</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {results.slice(0, 6).map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="bg-white/10 backdrop-blur rounded-lg overflow-hidden shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-2 text-white text-center">
                <h2 className="text-sm font-medium">{movie.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
