import {Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import AppBar from "./AppBar/AppBar";
import HomePage from "../page/HomePage";
import MoviesPage from "../page/MoviesPage";
export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   textTransform: 'uppercase',
      //   color: '#010101',
      // }}
    >
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/movies">
          <MoviesPage></MoviesPage>
        </Route>
        
        <Route>
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
};
