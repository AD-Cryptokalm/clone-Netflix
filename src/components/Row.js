import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "../styles/Row.scss";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const scrl = useRef();
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
  };

//   const myRef = useRef();
  //   const scroll = () => {
  //     myRef.current.scrollIntoView({behavior:"smooth", block: "center", inline:"nearest"});;
  //   };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2 className="row-categorie">{title}</h2>
      <div className="row-imgs" ref={scrl}>
        
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
             
              className="row-img"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="btns-scroll">
        <button className="prev" onClick={() => slide(-200)}>
          <i className="fa fa-angle-left"></i>
        </button>

        <button className="next">
          <i className="fa fa-angle-right"  onClick={() => slide(+200)}></i>
        </button>
      </div>
    </div>
  );
};

export default Row;
