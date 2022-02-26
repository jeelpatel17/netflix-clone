import axios from "../axios";
import { useEffect, useState } from "react";
import "./Row.css";

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  //   const [trailer, setTrailer] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);
  //   async function fetchTrailer(id) {
  //     const src = `https://www.youtube.com/embed/${id}`;
  //     setTrailer(src);
  //     return trailer;
  //   }
  return (
    <div className="Row">
      <h1>{title}</h1>
      <div className="row__posters">
        {/* {trailer && <iframe width="760" height="315" src={trailer}></iframe>} */}
        {movies.map((movie) => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                // onClick={() => console.log(fetchTrailer(movie.id))}
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
