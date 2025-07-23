import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleContent, setVisibleContent] = useState(6);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        const data = await res.json();
        setResults(data.results || []);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching search results", error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleBrowseMore = () => {
    const scrollY = window.scrollY;
    setTimeout(()=> window.scrollTo(0, scrollY), 0)
    setVisibleContent((prev) => prev + 6); //show 6 more
  };

  return (
    <div className="p-4">
      <Header />
      <h2 className="text-xl text-white mb-4">Search Results for '{query}'</h2>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.slice(0, visibleContent).map((movie) => (
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
      )}
      {!loading && visibleContent < results.length && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleBrowseMore}
          >
            Browse More
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
