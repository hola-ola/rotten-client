import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";

function Navbar() {
  return (
    <nav>
      <Link to={PATHS.HOME_PAGE}>Home</Link>
      <Link to={PATHS.MOVIES_PAGE}>Movies</Link>
      <Link to={PATHS.SIGNUP_PAGE}>Signup</Link>
    </nav>
  );
}

export default Navbar;
