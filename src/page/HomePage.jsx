import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
//import getPopularFilms from '../services/MoviesAPI'
import * as moviesAPI from '../services/moviesAPI'

export default function HomePage() {
   const [trendingMovies, setTrendingMovies] = useState([]);

   useEffect(() => {
      if (trendingMovies.length !== 0) {
         console.log("exit");
         console.log("TrendingMovies", trendingMovies);
         return;
      }
         moviesAPI.getPopularFilms().then(results => {
            console.log("results", results);
            setTrendingMovies([...results]);
            console.log("TrendingMovies", trendingMovies);

         })
   }, [trendingMovies]);

   //const nameMovie = results.original_title ?? results.original_name;
   return (
  
      <>
         <h1>Trending today</h1>
         <ul>
            {trendingMovies.map(({ id, title, name }) => (
               <li key={id} text={title ?? name}>
                  <Link to={`/movies/${id}`}>{title ?? name}</Link>
               </li>
               )
            )}
         </ul>
      </>
   )
}