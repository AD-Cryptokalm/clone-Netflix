import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Row.scss";

const Row = ({title, url}) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(request.data.results);
      console.log(request)
    }
    fetchData();
  }, [url]);

  console.log(movies)
  return (
    <div className="row">
      <h2 className="row-categorie">{title}</h2>
      <div className="row-imgs">
        {movies.map((movie) => (
          <div key={movie.id}>
              <img className="row-img"
               src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
