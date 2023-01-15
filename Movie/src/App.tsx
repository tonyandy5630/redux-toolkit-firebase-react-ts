import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import AddMovie from "./components/AddMovie/add-movie";
import MovieList from "./components/MovieList/MovieList";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/add-movie'>
          <AddMovie />
        </Route>
        <Route path='/show-movies'>
          <MovieList />
        </Route>
        <Route path='/'>
          <AddMovie />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
