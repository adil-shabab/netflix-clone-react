import React, { useState, useEffect } from "react";
import instance from "../../axios";
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const opts={
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 0
  }
}

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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



  const handleClick =(movie)=>{
    if(trailerUrl) {
      setTrailerUrl("")
    }else{
      movieTrailer(movie.title || "").then((url)=>{
        const urlParams = new URLSearchParams(new URL (url).search)
        setTrailerUrl(urlParams.get("v"))
        console.log(urlParams)
      }).catch((error)=> console.log(error))
    }
  }


  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_poster">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={()=> handleClick(movie)}
              className={`poster ${isLargeRow && "large-poster"}`}
              src={`${imageBaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>

      <div className="w-100">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
}

export default Row;
