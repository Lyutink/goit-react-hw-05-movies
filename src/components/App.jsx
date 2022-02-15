import { lazy} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout/Layout";

const loader = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    })));
};

const HomePage = loader('HomePage');
const MoviesPage = loader('MoviesPage');
const MovieDetailsPage = loader('MovieDetailsPage');
const Cast = loader('Cast');
const Reviews = loader('Reviews');


// const HomePage = lazy(() => import('../pages/HomePage').then(module => ({default: module.HomePage})));
// const MoviesPage = lazy(() => import('../pages/MoviesPage').then(module => ({default: module.MoviesPage})));
// const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage').then(module => ({ default: module.MovieDetailsPage })));
// const Cast = lazy(() => import('../pages/Cast').then(module => ({ default: module.Cast })));
// const Reviews = lazy(() => import('../pages/Reviews').then(module => ({ default: module.Reviews })));

export default function App  () {
  return (
    //<Suspense fallback=""> перенесла в Layout
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
    //</Suspense>
  );
};
