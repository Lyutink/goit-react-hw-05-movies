import { useEffect, useState } from "react"

import Loader from "components/Loader/Loader";

import { getPopularFilms } from "services/moviesApi";
import MoviesList from "components/MoviesList/MoviesList";

//кастомный Хук
const useFetchMovies = () => {
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

export function HomePage() {
   // а тут его (кастомный чук) использую
   const { trendingMovies, loading } = useFetchMovies();
   return (
      <>
         <h1>Trending today</h1>
         {loading && <Loader />}
         <MoviesList movies={trendingMovies}/>
      </>
   )
}