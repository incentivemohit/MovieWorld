import React, { useState, useEffect } from "react";
import "./TrendingMovies.css";
import star from "../images/Star.png";
import axios from "axios";
import { img_300 } from "../config";

import Carousel from "react-bootstrap/Carousel";
function TrendingMovies() {
  const [Trending, setTrending] = useState([0]);

  const GetTrending = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=e09ddbae34a7356621bb5a1e553fda18"
    );

    console.log(data.results);
    setTrending(data.results);
  };

  useEffect(() => {
    GetTrending();
  }, []);

  return (
    <>
      <div className="latest-movieList-wrapper">
        <ul id="latest-movieList">
          {Trending.map((trending) => (
            <li id="latest-movie-card" key={trending.id}>
              <div id="latest-movieList-ratings">
                <img src={star} id="latest-movieList-ratings-img" alt="" />
              </div>
              <img
                src={`${img_300}/${trending.poster_path}`}
                width={340}
                height={450}
                alt=""
              />
              <div className="latest-movie-poster-details">
                <div className="latest-movie-poster-title">
                  {trending.title}
                </div>
                <div className="latest-movie-language-and-date">
                  <div className="latest-movie-language">
                    Language : {trending.original_language}
                  </div>
                  <div className="latest-movie-release-date">
                    Release Data : {trending.release_date}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div id="latest-movieList-carousel">
          <Carousel>
            {Trending.map((trending) => (
              <Carousel.Item interval={1000} key={trending.id}>
                <img
                  className="d-block w-100  "
                  height={300}
                  src={`${img_300}/${trending.poster_path}`}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div className="latest-movie-posterTitle-of-carousel">
                    {trending.title}
                  </div>

                  <div className="latest-movie-poster-of-carousel">
                    <p
                      className="latest-movie-language"
                      style={{ fontWeight: "normal" }}
                    >
                      Language : {trending.original_language}
                    </p>
                    <p
                      className="latest-movie-release-date"
                      style={{ fontWeight: "normal" }}
                    >
                      Release Date : {trending.release_date}
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default TrendingMovies;
