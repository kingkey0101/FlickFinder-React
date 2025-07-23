import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, className = "" }) {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/fallback.jpg";
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={img} alt={movie.title} className={`mx-auto ${className}`} />
      <h3>{movie.title}</h3>
    </Link>
  );
}
