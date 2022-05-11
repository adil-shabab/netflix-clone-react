import axios from 'axios'



// base url to make requests to the movie data base
const instance = axios.create({
    baseUrl: 'https://api.themoviedb.org/3'
})



export default instance