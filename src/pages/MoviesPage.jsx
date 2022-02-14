import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
//import { useLocation} from "react-router-dom";
import Notiflix from "notiflix";

import Loader from "components/Loader/Loader";
import { SearchForm } from "components/Form/Form";

import { getSerchMovies } from "../services/moviesApi";
import MoviesList from "components/MoviesList/MoviesList";


export function MoviesPage() {
   //const location = useLocation();
  // const history = useHistory();
   const [searchParams, setSearchParams] = useSearchParams();
   const [loading, setLoading] = useState(false);
   //const [searchMovies, setSearchMovies] = useState('');
   const [resultsMovies, setResultMovies] = useState([]);

   //const currentQuery =  (new URLSearchParams(location.search).get('query') ?? '');
   const currentQuery = searchParams.get('query');


   // useEffect(() => {
   //    if (location.search !== '') {
   //       console.log(1)
   //       return;
   //    }
   //    if (searchMovies) {
   //      // history.push({ ...location, search: `query=${searchMovies}` });
   //       console.log('2 location', location);
   //    }
   // }, [location, searchMovies])
   
   useEffect(() => {
      if (currentQuery) {
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
      }
   },[currentQuery])
   
   
   function handleSubmit(event) {
      event.preventDefault();
      const queryString = event.currentTarget.elements.query.value;
      if (queryString === "") {
      Notiflix.Notify.info('Please, enter a request!');
      return;
      }
         setSearchParams({query: queryString.trim().toLowerCase()})
      //setSearchMovies(queryString.trim().toLowerCase());
      //console.log("searchMovies",searchMovies);
      //history.push({ ...location, search: `query=${searchMovies}` });
      //console.log('3 history');
   }

   return (
      <main>
         <SearchForm handleSubmit={handleSubmit} autoComplete="off"/>
         {loading && <Loader/>}
         {resultsMovies && <MoviesList movies={resultsMovies} />}
      </main>)
}