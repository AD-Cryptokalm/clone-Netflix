import React, { useEffect, useState } from "react";
import "../styles/Banner.scss";
import axios from "axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [type, setType] = useState("");

  const imgBanner = {
    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=2de1443070a5851805be617de2a6a73c"
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
    if (movie.media_type === "tv") {
      setType("Série");
    } else if (movie.media_type === "movie") {
      setType("Film");
    }
  }, [movie.media_type]);
  

  

  return (
    <header className="banner" style={imgBanner}>
      <div className="banner-container">
        <div className="banner-type-container">
          <img src="./images/miniLogo.png" alt="" className="banner-miniLogo" />
          <p className="banner-type">{type}</p>
        </div>
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="banner-description">{movie.overview}</p>
        <div className="banner-bottom">
        <div className="banner-btns">
          <button className="banner-btn1">
            <i className="fa-sharp fa-solid fa-play banner-icon1"></i> Lecture
          </button>
          <button className="banner-btn2">
            <i className="fa-solid fa-info banner-icon2"></i>Plus d'infos
          </button>
        </div>
        <div className="banner-info">
          <i className="fa-solid fa-volume-high"></i>
          <p className="banner-age">7+</p>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
