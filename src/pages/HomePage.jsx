import { useFetchMovies } from "components/hooks";
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";

export function HomePage() {
   // а тут его (кастомный хук useFetchMovies) использую
   const { trendingMovies, loading } = useFetchMovies();
   return (
      <>
         <h1>Trending today</h1>
         {loading && <Loader />}
         <MoviesList movies={trendingMovies}/>
      </>
   )
}