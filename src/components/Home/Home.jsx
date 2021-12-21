import React from "react";
import Header from "../Header/Header";
import TrendingMovies from "../Trending/TrendinMovies";
import PopularMovies from "../Popular/PopularMovies";
import "./Home.css";
function Home() {
  return (
    <>
      <Header /> <p className="Movies-section-heading">Trending Movies</p>
      <div className="TrendingMovies">
        <TrendingMovies />
      </div>
      <p className="Movies-section-heading">Popular Movies</p>
      <div className="PopularMovies">
        <PopularMovies />
      </div>
    </>
  );
}

export default Home;
