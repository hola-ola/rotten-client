import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePageComponent from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import * as PATHS from "./utils/paths";
import Navbar from "./components/Navbar/Navbar";
import SingleMoviePage from "./pages/SingleMoviePage";
import SignupPage from "./pages/SignupPage";
import axios from "axios";
// because we need to get user data

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const myAccessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: myAccessToken,
        },
      })
      .then((response) => {
        console.log("response:", response);
        setUser(response.data);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, []);

  function authenticate(user) {
    setUser(user);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("accessToken");
    axios.delete(`http://localhost:5000/api/logout`);
  }

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <Switch>
        {/* <Route exact path={PATHS.HOME_PAGE} component={HomePageComponent} /> */}
        <Route
          exact
          path={PATHS.HOME_PAGE}
          render={(reactRouterProps) => (
            <HomePageComponent {...reactRouterProps} />
          )}
        />
        {/* <Route exact path="/login" component={LoginPage}/> */}
        <Route
          exact
          path="/signup"
          render={(reactRouterProps) => (
            <SignupPage {...reactRouterProps} authenticate={authenticate} />
          )}
        />
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
