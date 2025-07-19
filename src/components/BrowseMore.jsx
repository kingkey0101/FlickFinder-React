import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const BrowseMore = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);
  return (
    <section className="browse-more p-4">
      <h2 className="text-2xl text-white mb-4">Browse More Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default BrowseMore;
