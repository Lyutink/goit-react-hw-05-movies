import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import Loader from "components/Loader/Loader";

import { getPopularFilms } from "services/moviesAPI";

export default function HomePage() {
   const location = useLocation();
   const [trendingMovies, setTrendingMovies] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (trendingMovies.length !== 0) {
         console.log("exit");
         console.log("TrendingMovies", trendingMovies);
         return;
      }

      async function fetchMovies() {
         setLoading(true);
         try {
            const movies = await getPopularFilms();
            //.then(results => {
               //console.log("results", results);
               setTrendingMovies([...movies])
           
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }
      fetchMovies();
   }, [trendingMovies]);

  
   return (
      <>
         <h1>Trending today</h1>
         {loading && <Loader/>}
         <ul>
            {trendingMovies.map(({ id, title, name }) => (
               <li key={id} text={title ?? name}>
                  <Link to={{
                     pathname: `/movies/${id}`,
                     state: { from: location },
                  }}>
                     {title ?? name}
                  </Link>
               </li>
               )
            )}
         </ul>
      </>
   )
}