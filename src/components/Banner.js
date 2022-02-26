import axios from "../axios";
import { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../Requests";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.round(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  // TO TRUNCATE THE BANNER DESCRIPTION IF IT EXCEEDS 150 CHARACTERS
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="Banner"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(37, 37, 37, .61), #111), url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}') no-repeat top center`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div>
          <button className="banner__button">&#9654; Play</button>
          <button className="banner__button">&#43; My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
    </header>
  );
}
