import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((r) => r.json())
      .then((data) => {
        setMovie(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      .catch(console.error);
  }, [id]);

  if (!movie) return <Spinner />;

  return (
    <div className="details-page min-h-screen bg-gray-900 text-white p-4">
      <Link to={"/"}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py- px-4 m-4 rounded">
          ← Back
        </button>
      </Link>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg mb-4 w-[300px] md:w-[400px]"
          />
          <p className="max-w-2xl">{movie.overview}</p>
        </div>
      )}
    </div>
  );
}
