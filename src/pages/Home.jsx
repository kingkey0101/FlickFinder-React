import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Spinner from "../components/Spinner";

const API_KEY = "YOUR_KEY";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Trending />
    </>
  );
};

export default Home;
