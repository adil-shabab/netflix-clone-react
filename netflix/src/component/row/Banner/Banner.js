import React,{useState, useEffect} from 'react'
import instance from '../../../axios';
import requests from '../../../requests';


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
    style={{height: "100vh",width: "100%",backgroundImage: `url(${imageUrl}${movie.backdrop_path})`, backgroundPosition: "center", backgroundSize: "cover"}}
    >
        <div className="banner-content">
            <h1></h1>
        </div>
    </header>
  )
}

export default Banner