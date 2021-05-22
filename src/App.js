import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePageComponent from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import * as PATHS from "./utils/paths";
import Navbar from "./components/Navbar";
import SingleMoviePage from "./pages/SingleMoviePage";
import SignupPage from "./pages/SignupPage";
import axios from "axios";
import LoginPage from "./pages/Loginpage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import NormalRoute from "./components/routing/NormalRoute";
// because we need to get user data

// fetch('http://locahost:5000/api', {
//   headers
// })

// function DisplayUser(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.from}</h2>
//       <h3>{props.inCountry}</h3>
//     </div>
//   );
// }

// function AnotherAppComponentJustToMakeExample() {
//   const user = {
//     name: "Khrys",
//     from: "Ukraine",
//     inCountry: "netherlands",
//   };

//   return <DisplayUser {...user} />;
//   // return <DisplayUser name={user.name} from={user.from} inCountry={user.inCountry} />
// }

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const myAccessToken = localStorage.getItem("accessToken");
    if (!myAccessToken) {
      return;
    }
    axios
      .get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: myAccessToken,
        },
      })
      .then((response) => {
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
    const accessToken = localStorage.getItem("accessToken");
    setUser(null);
    localStorage.removeItem("accessToken");
    return axios.delete(`http://localhost:5000/api/auth/logout`, {
      headers: {
        Authorization: accessToken,
      },
    });
  }

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <Switch>
        <NormalRoute
          exact
          path={PATHS.HOME_PAGE}
          component={HomePageComponent}
        />
        <NormalRoute
          exact
          path={PATHS.LOGIN_PAGE}
          authenticate={authenticate}
          component={LoginPage}
        />
        <NormalRoute
          exact
          path={PATHS.SIGNUP_PAGE}
          authenticate={authenticate}
          component={SignupPage}
        />
        <ProtectedRoute
          exact
          path={PATHS.PROFILE_PAGE}
          component={ProfilePage}
          user={user}
          authenticate={authenticate}
        />
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
