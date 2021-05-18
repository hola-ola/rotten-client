import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePageComponent from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import * as PATHS from "./utils/paths";
import Navbar from "./components/Navbar/Navbar";
import SingleMoviePage from "./pages/SingleMoviePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={PATHS.HOME_PAGE} component={HomePageComponent} />
        {/* <Route exact path="/login" component={LoginPage}/> */}
        <Route exact path="/signup" component={SignupPage} />
        {/* <Route exact path="/profile" component={ProfilePage}/> */}
        <Route exact path={PATHS.MOVIES_PAGE} component={MoviesPage} />
        {/* <Route exact path="/movies/add" component={AddMoviePage}/> */}
        <Route exact path={PATHS.SINGLE_MOVIE} component={SingleMoviePage} />
        {/* <Route exact path="movies/:movieId/edit" component={EditSinglePage}/> */}
        {/* <Route exact path="/:username" component={SingleUserPage}/> */}
      </Switch>
    </div>
  );
}

export default App;
