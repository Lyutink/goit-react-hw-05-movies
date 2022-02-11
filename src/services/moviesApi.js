import axios from "axios"
import Notiflix from "notiflix";
Notiflix.Notify.init({
  width: "280",
  position: "center-top",
  distance: "180px",
  opacity: 1,
  timeout: 3000,
  showOnlyTheLastOne: true,
  clickToClose: true,
  useIcon: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_Key = "e5081468dae293b7907b87f3cbb5b6c8";

export async function getPopularFilms() {
    try {
        const response = await axios.get(`trending/all/day?api_key=${API_Key}`);
        return response.data.results;
    }
    catch (error) {
        Notiflix.Notify.init("Critical error", error);
        //failure
    }
}

export async function getMovieDetails(movieId) {
    try {
        const response = await axios.get(`movie/${movieId}?api_key=${API_Key}&language=en-US`);
        return response.data;
    }
    catch (error) {
        Notiflix.Notify.init("Critical error", error);
        //failure
    }
}


export async function getMovieCast(movieId) {
    try {
        const response = await axios.get(`movie/${movieId}/credits?api_key=${API_Key}&language=en-US`);
        return response.data;
    }
    catch (error) {
        Notiflix.Notify.init("Critical error", error);
        //failure
    }
}

export async function getReviews(movieId) {
    try {
        const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_Key}&language=en-US`);
        return response.data;
    }
    catch (error) {
        Notiflix.Notify.init("Critical error", error);
        //failure
    }
}

export async function getSerchMovies(searchMovies) {
    try {
        const response = await axios.get(`search/movie?api_key=${API_Key}&language=en-US&query=${searchMovies}`);
        return response.data;
    }
    catch (error) {
        Notiflix.Notify.init("Critical error", error);
        //failure
    }
}
