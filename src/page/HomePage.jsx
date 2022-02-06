import { useEffect, useState } from "react"
import * as moviesAPI from '../services/MoviesAPI'

export default function HomePage() {
   const [trendingMovies, setTrendingMovies] = useState([]);

   useEffect(() => {
      if (trendingMovies !== [])
         moviesAPI.fetchMovies().then((response) => {
            const g = response.date;
            console.log("g", g)
            setTrendingMovies([...g])
         });
      console.log(trendingMovies);
   }, [trendingMovies]);

   //const nameMovie = results.original_title ?? results.original_name;
   return (
  
      <>
         <h1>Trending today</h1>
         <ul>
            {trendingMovies.map(({results}) => {
               <li key={results.id} text={results.original_title ?? results.original_name}></li>
            })}
         </ul>
      </>
   )
}