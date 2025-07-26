import React from "react";
import MovieCard from "./MovieCard";

export default function movieGrid({ movies }) {
  return (
    <div className="movie-grid">
      {movies.slice(0, 6).map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
