const API_KEY = "1badb4831c5be2709ffd4246ae811055" 


const requests = {

    Trending :`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    Action :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    Originals :`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests