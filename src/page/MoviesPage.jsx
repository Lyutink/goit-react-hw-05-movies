import { useEffect, useState } from "react"
import { useLocation, useHistory} from "react-router-dom";
import Notiflix from "notiflix";

import Loader from "components/Loader/Loader";
import { SearchForm } from "components/Form/Form";

import { getSerchMovies } from "../services/moviesAPI";
import MoviesList from "components/MoviesList/MoviesList";


export default function MoviesPage() {
   const location = useLocation();
   const history = useHistory();

   const [loading, setLoading] = useState(false);
   const [searchMovies, setSearchMovies] = useState('');
   const [resultsMovies, setResultMovies] = useState([]);

   const currentQuery =  (new URLSearchParams(location.search).get('query') ?? '');


   useEffect(() => {
      if (location.search !== '') {
         console.log(1)
         return;
      }
      if (searchMovies) {
         history.push({ ...location, search: `query=${searchMovies}` });
         console.log('2 location', location);
      }
   }, [history, location, searchMovies])
   
   useEffect(() => {
      if (!currentQuery) {
         return;
      }

      async function fetchSerchMovies() {
         setLoading(true);
         try {
            const movies = await getSerchMovies(currentQuery);
            if (movies.results.length === 0) {
               Notiflix.Notify.info('Sorry, there is no movie for this request. please enter a new request');
               return;
            }
            setResultMovies(movies.results); 
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false)
         }
      }
      fetchSerchMovies();
   },[currentQuery])
   
   
   function handleSubmit(event) {
      event.preventDefault();
      const queryString = event.currentTarget.elements.query.value;
      if (queryString === "") {
      Notiflix.Notify.info('Please, enter a request!');
      return;
    }
      setSearchMovies(queryString.trim().toLowerCase());
      history.push({ ...location, search: `query=${searchMovies}` });
      console.log('3 history', history);
   }

   return (
      <>
         {/* <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text" name="query" />
            <button type="submit">Search</button>
         </form> */}
         <SearchForm handleSubmit={handleSubmit} autoComplete="off"/>
         {loading && <Loader/>}
         {resultsMovies && <MoviesList movies={resultsMovies} />}
      </>)
}