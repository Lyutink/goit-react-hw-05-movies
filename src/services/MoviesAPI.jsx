import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_Key = "e5081468dae293b7907b87f3cbb5b6c8";


// export function fetchImages(requestInInput, page, per_page) {
//     return axios.get(`?key=${API_Key}&q=${requestInInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`);
// }

export function fetchMovies() {
    return axios.get(`trending/all/day?api_key=${API_Key}`);
}

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>