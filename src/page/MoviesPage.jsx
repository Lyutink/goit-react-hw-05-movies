import { useEffect, useState } from "react"
import { useLocation, useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import Notiflix from "notiflix";

import Loader from "components/Loader/Loader";

import { getSerchMovies } from "services/moviesAPI";
//import { Link, useRouteMatch } from "react-router-dom";
// useRouteMatch лекция Занятие 9 21,12,2020 мин45
export default function MoviesPage() {
   const location = useLocation();
   const history = useHistory();
   const [loading, setLoading] = useState(false);
   const [searchMovies, setSearchMovies] = useState('');
   const [resultsMovies, setResultMovies] = useState([]);
 
   const currentQuery = new URLSearchParams(location.search).get('query')
   console.log("currentQuery", currentQuery);
   setSearchMovies(currentQuery ?? '');

   useEffect(() => {
      if (!searchMovies) {
         console.log('1')
         return;
      }
      // if (location.state.from.searchMovies !== "") {
      //    setSearchMovies(location.state.from.searchMovies);
      // }

      async function fetchSerchMovies() {
         setLoading(true);
         try {
            const movies = await getSerchMovies(searchMovies);
            if (movies.results.length === 0) {
               Notiflix.Notify.info('Sorry, there is no movie for this request. please enter a new request');
               return;
            }
            setResultMovies(movies.results);
            //history.push(location.state = { from: { location, query: `${searchMovies}` } });
            history.push({ ...location, search: `query=${searchMovies}` });
            console.log(2)
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false)
         }
      }
      fetchSerchMovies();
   }, [])
   
   function handleSubmit(event) {
      event.preventDefault();
      const queryString = event.currentTarget.elements.query.value;
      if (queryString === "") {
      Notiflix.Notify.info('Please, enter a request!');
      return;
    }
      setSearchMovies(queryString.trim().toLowerCase());
   }

   return (
      <>
         <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text" name="query" />
            <button type="submit">Search</button>
         </form>

         {loading && <Loader/>}
         {resultsMovies && 
            <>
                     <ul>
            {resultsMovies.map(({ id, title, name }) => (
               <li key={id} text={title ?? name}>
                  <Link to={{
                     pathname: `/movies/${id}`,
                     state: {
                        from: {
                           location
                          
                     }
                     },
                  }}>
                     {title ?? name}
                  </Link>
               </li>
               )
            )}
         </ul>
            </>
         }
      </>)
}