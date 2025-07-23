import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("Error fetching trending movies", err));
  }, []);

  return (
    <section className="trending">
      <h2>Trending Movies</h2>
      {/* movie-grid was class */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  gap-4 p-4">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            className="bg-white/10 backdrop-blur rounded-lg overflow-hidden w-32 sm:w-40 md:w-44 shadow"
          />
        ))}
      </div>
      {/* browse more option */}
      <div className="flex justify-center mt-4 px-4">
        <Link to="/browse:query">
          <button
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-8 rounded text-sm sm:text-base"
            onClick={() => setMovies(movies)}
          >
            Browse More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Trending;
