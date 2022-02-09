import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
//import { Link } from "react-router-dom";

import Loader from "components/Loader/Loader";

import { getPopularFilms } from "services/moviesAPI";
import MoviesList from "components/MoviesList/MoviesList";
export default function HomePage() {
   const location = useLocation();
   console.log("HomePage location", location)
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
         {loading && <Loader />}
         <MoviesList movies={trendingMovies} location={location}/>
         {/* <ul>
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
         </ul> */}
      </>
   )
}