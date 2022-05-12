import React,{useState, useEffect} from 'react'
import instance from '../../../axios';
import requests from '../../../requests';
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

    
    function truncate(str, n) {
        return str.length > n ? str.substr(0, n-1) + "..." : str
    }


  return (
    <header className='banner'
    style={{height: "100vh",width: "100%",backgroundImage: `url(${imageUrl}${movie.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover"}}
    >
        <div className="banner-content">
            <h1>{movie.title || movie.name ||movie.Original_name}</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>

            <h2 className="banner-description">
                {truncate(movie.overview, 150)}
            </h2>
        </div>

        


    </header>
  )
}

export default Banner