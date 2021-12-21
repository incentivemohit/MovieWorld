import React, { useState, useEffect } from "react";
import "./PopularMovies.css";
import { Link } from "react-router-dom";
import star from "../images/Star.png";
import { img_300 } from "../config";
import axios from "axios";
function PopularMovies() {
  const [Popular, setPopular] = useState([0]);

  const GetPopular = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e09ddbae34a7356621bb5a1e553fda18&language=en-US&page=1"
    );

    console.log(data.results);
    setPopular(data.results);
  };

  useEffect(() => {
    GetPopular();
  }, [0]);

  return (
    <>
      <div className=" popular-movies-wrapper">
        <div className="popular-movieList">
          {Popular.map((popular) => (
            <div className="popular-movie-card card" key={popular.id}>
              <Link to={`movieDetails/${popular.id}`}>
                <div className="popular-movie-poster">
                  <img
                    src={`${img_300}/${popular.poster_path}`}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>
              </Link>

              <div className="popular-movie-details">
                <Link to={`movieDetails/${popular.id}`}>
                  <div className="popular-movie-title">{popular.title}</div>
                </Link>

                <div className="popular-movie-starRating-section">
                  <div>
                    <img src={star} width={100} height={25} alt="" />
                  </div>
                  <div className="starRating-Numbers">
                    {popular.vote_average}
                  </div>
                  <div className="popular-movie-language">
                    {popular.original_language}
                  </div>
                </div>

                <div className="popular-movie-year">
                  Release Date : {popular.release_date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularMovies;
