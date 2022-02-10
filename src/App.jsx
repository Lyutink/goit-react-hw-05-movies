import {Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "page/HomePage";
import MoviesPage from "page/MoviesPage";
import MoviesDetailsPage from './page/MovieDetailsPage';


export const App = () => {
  return (
    <div>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/movies">
          <MoviesPage></MoviesPage>
          
        </Route>
        
        <Route path="/movies/:movieId">
          <MoviesDetailsPage/>
        </Route>

        <Route>
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
};
