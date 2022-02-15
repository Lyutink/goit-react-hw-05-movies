import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import Notiflix from "notiflix";

import Loader from "components/Loader/Loader";
import { SearchForm } from "components/Form/Form";

import { getSerchMovies } from "../services/moviesApi";
import MoviesList from "components/MoviesList/MoviesList";


export function MoviesPage() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [loading, setLoading] = useState(false);
   const [resultsMovies, setResultMovies] = useState([]);

   const currentQuery = searchParams.get('query');
   
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
   }

   return (
      <main>
         <SearchForm handleSubmit={handleSubmit} autoComplete="off"/>
         {loading && <Loader/>}
         {resultsMovies && <MoviesList movies={resultsMovies} />}
      </main>)
}