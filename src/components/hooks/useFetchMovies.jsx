import { useEffect, useState } from "react"
import { getPopularFilms } from "services/moviesApi";


//кастомный Хук
export const useFetchMovies = () => {
   const [trendingMovies, setTrendingMovies] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
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
   }, []);

   return { trendingMovies, loading };
};