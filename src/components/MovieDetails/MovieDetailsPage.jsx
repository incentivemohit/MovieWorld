import React, { useState, useEffect } from "react";
import "./MovieDetailsPage.css";
import Header from "../Header/Header";
import star from "../images/Star.png";

import { useParams } from "react-router-dom";
import axios from "axios";
import { img_300 } from "../config";

function MovieDetailsPage() {
  let { id } = useParams();

  const [Details, setDetails] = useState([0]);

  const GetDetails = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e09ddbae34a7356621bb5a1e553fda18`
    );

    console.log(data.results);
    setDetails(data.results);
  };

  const [TopRated, setTopRated] = useState([0]);

  const GetTopRated = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=e09ddbae34a7356621bb5a1e553fda18`
    );

    console.log(data.results);
    setTopRated(data.results);
  };

  useEffect(() => {
    GetDetails();
    GetTopRated();
  }, [0]);

  return (
    <>
      <div className="details-page">
        <Header />

        {Details.map((details) => (
          <>
            <div className="movie-Details" key={details.id}>
              <div className="movie-details-block">
                <div className="movie-Poster">
                  <img
                    src={`${img_300}/${details.poster_path}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="details">
                  <div className="movie-Name">{details.title}</div>
                  <div className="movie-Rating-Stars">
                    <img src={star} style={{ width: "100%", height: "100%" }} />
                  </div>
                  <div className="movie-Language">
                    Language : {details.original_language}
                  </div>
                  <div className="movie-Release-Date">
                    Release Date : {details.release_date}
                  </div>
                </div>
              </div>

              <div className="overview">
                <p className="section-name">Overview</p>
              </div>

              <div id="movie-overview">{details.overview}</div>
            </div>
          </>
        ))}

        <div className="Top-Rated-Movies">
          <p className="section-name">Top Rated Movies</p>
        </div>

        <div className="container">
          <div class="row ">
            {TopRated.map((topRated) => (
              <div className="col" key={topRated.id}>
                <div className=" TopRatedMovies card">
                  <div>
                    <img
                      src={`${img_300}/${topRated.poster_path}`}
                      className="TopRatedMovies-img"
                      alt=""
                    />
                  </div>
                  <div className="TopRatedMovies-name">{topRated.title}</div>
                  <div className="TopRatedMovies-date">
                    Release At: {topRated.release_date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsPage;
