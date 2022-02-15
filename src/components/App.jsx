//import { lazy } from "react";
//import { Switch, Route } from "react-router-dom";
import { Routes, Route, Navigate} from "react-router-dom";
//import AppBar from "./components/AppBar/AppBar";
import Layout from "components/Layout/Layout";
import { HomePage } from "pages";
import { MoviesPage } from "pages";
import { MovieDetailsPage } from 'pages';
import { Cast } from "pages";
import { Reviews } from "pages";
//const HomePage = lazy(() => import('./page/HomePage'));
//const MoviesPage = lazy(() => import('./page/MoviesPage'));
//const MovieDetailsPage = lazy(() => import('./page/MovieDetailsPage'));

export default function App  () {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage/>} />
        <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={ <Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Route>
    </Routes>
    // <div>
    //   <AppBar />

    //   <Switch>
    //     <Route exact path="/">
    //       <HomePage/>
    //     </Route>

    //     <Route exact path="/movies">
    //       <MoviesPage></MoviesPage>
          
    //     </Route>
        
    //     <Route path="/movies/:movieId">
    //       <MovieDetailsPage/>
    //     </Route>

    //     <Route>
    //       <HomePage/>
    //     </Route>
    //   </Switch>
    // </div>
  );
};
