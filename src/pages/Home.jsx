import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Spinner from "../components/Spinner";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    let endpoint = searchTerm
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          searchTerm
        )}`
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setMovies(data.results);
      setTimeout(() => {
        setLoading(false)
      }, 800);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };
  useEffect(() => {
    fetchMovies("");
  }, []);
  useEffect(() => {
    if (query !== "") fetchMovies(query);
  }, [query]);
  return (
    <>
      <Header setQuery={setQuery} />
      <Hero />
      {loading ? <Spinner /> : <Trending movies={movies} />}
    </>
  );
};

export default Home;
