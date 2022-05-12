import React, { useState, useEffect } from "react";
import instance from "../../axios";
import './Row.css'
const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition
  // if [], run once when row loads, and dont run again
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_poster">
        {movies.map((movie) => {
          return (
            <img
            key={movie.id}
              className={`poster ${isLargeRow && "large-poster"}`}
              src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
