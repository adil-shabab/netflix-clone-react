import React,{useState, useEffect} from 'react'
import instance from '../../axios';
import requests from '../../requests';
import './Banner.css'

const imageUrl = 'https://image.tmdb.org/t/p/original'

function Banner() {
    
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.Originals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1 )])
        }
        fetchData()
    }, []);
    console.log(movie)

    



  return (
    <header className='banner'
    style={{width: "100%",backgroundImage: `url(${imageUrl}${movie.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat:"no-repeat"}}
    >
        <div className="banner-content container-fluid">
            <h1>{movie.title || movie.name ||movie.Original_name}</h1>
            <div className="banner-buttons mt-3">
                <button className="button btn mr-2"><i class="fa-solid fa-play"></i>   Play</button>
                <button className="button btn"><i class="fa-solid fa-bookmark"></i>   My List</button>
            </div>

            <p className="banner-description mt-4">
                {movie.overview}
            </p>
        </div>
        <div className="banner-fade"/>
        


    </header>
  )
}

export default Banner