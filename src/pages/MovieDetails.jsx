import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fethcMovie = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching movie", error);
        setLoading(false);
      }
    };
    fethcMovie();
  }, [id]);

  if (!movie) return <Spinner />;

  return (
    <div className="details-page min-h-screen bg-gray-900 text-white p-4">
      <button
        onClick={() => navigate(-1)} //go back to prev
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py- px-4 m-4 rounded"
      >
        ← Back
      </button>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center text-white px-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg mb-4 w-[300px] md:w-[400px]"
          />
          <p className="max-w-2xl text-center">{movie.overview}</p>
        </div>
      )}
    </div>
  );
}
