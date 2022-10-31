import axios from "axios";
import { useEffect, useState } from "react";

import "../styles/QuickView.scss";

const QuickViewBanner = ({
  movieId,
  mediaType,
  img,
  popupInfo,
  popupStatut,
}) => {
  const [movieDetail, setMovieDetail] = useState("");
  const [date, setDate] = useState("");
  const [runTime, setRunTime] = useState("");

  function convertRunTime(runTime) {
    const minutes = runTime % 60;
    const hours = Math.floor(runTime / 60);

    return `${padTo2Digits(hours)} h ${padTo2Digits(minutes)} min`;
  }
  function padTo2Digits(num) {
    return num.toString();
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2de1443070a5851805be617de2a6a73c&language=en-fr`
      );
      setMovieDetail(request.data);
      setDate(request.data.release_date);
      setRunTime(convertRunTime(request.data.runtime));
    }
    fetchData();
    convertRunTime(runTime);
  }, [movieId, movieDetail, runTime]);

  //   console.log(convertRunTime(runTime)); // 👉️ 01:30

  const imgBanner = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${img}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  console.log(movieDetail);
  return (
    <div className="backdrop">
      <div className="quickViewBanner">
        <div className="quickViewBanner-btnClose" onClick={popupInfo}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <header className="quickViewBanner-banner" style={imgBanner}>
          <div className="banner-type-container">
            <img
              src="./images/miniLogo.png"
              alt=""
              className="banner-miniLogo"
            />
            <p className="banner-type">{mediaType}</p>
          </div>
          <div className="quickViewBanner-titleTagline">
            <h1 className="banner-title">
              {movieDetail?.title ||
                movieDetail?.name ||
                movieDetail?.original_name}
            </h1>
            <p className="quickViewBanner-tagline">{movieDetail.tagline}</p>
          </div>
          <div className="banner-bottom quickViewBanner-info">
            <div className="banner-btns ">
              <button className="banner-btn1">
                <i className="fa-sharp fa-solid fa-play banner-icon1"></i>{" "}
                Lecture
              </button>
              <div className="quickViewBanner-btns">
                <i className="fa-light fa-plus quickViewBanner-btn quickViewBanner-btn1"></i>
                <i className="fa-regular fa-thumbs-up quickViewBanner-btn"></i>
              </div>
            </div>
            <div className="banner-info quickViewBanner-sound">
              <i className="fa-solid fa-volume-high"></i>
            </div>
          </div>
        </header>
        <section className="quickViewBanner-details-container">
          <div className="quickViewBanner-details-left">
            <div className="quickViewBanner-infoMovie">
              <p className="quickViewBanner-new">Nouveau</p>
              <p className="quickViewBanner-year">{date.substring(4, 0)}</p>
              <p className="quickViewBanner-age">16+</p>
              <p className="quickViewBanner-time">{runTime}</p>
              <p className="quickViewBanner-hd">HD</p>
            </div>
            <div className="quickViewBanner-description">
              {movieDetail.overview}
            </div>
          </div>
          <div className="quickViewBanner-details-right">
            <p className="quickViewBanner-distribution">Distibution:...</p>
            <p className="quickViewBanner-distribution">Genres:...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuickViewBanner;
