import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const BrowseMore = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
    }
  };

  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setTimeout(() => setLoading(false), 800);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />

      <section className="browse-more p-4">
        <h2 className="text-2xl text-white mb-4">Browse More Movies</h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                className="bg-white/10 backdrop-blur rounded-lg overflow-hidden w-32 sm:w-40 md:w-44 shadow"
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default BrowseMore;
