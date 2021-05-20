import React from "react";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";

function Navbar(props) {
  return (
    <nav>
      <Link to={PATHS.HOME_PAGE}>Home</Link>
      <Link to={PATHS.MOVIES_PAGE}>Movies</Link>

      {props.user ? (
        <div>
          <div>Hey {props.user.username}</div>
          <div onClick={props.logout}>Logout</div>
        </div>
      ) : (
        <>
          <Link to={PATHS.SIGNUP_PAGE}>Signup</Link>
          <Link to={PATHS.LOGIN_PAGE}>Login</Link>
        </>
      )}
      {/* {!props.user && <Link to={PATHS.SIGNUP_PAGE}>Signup</Link>}
      {props.user ? null : <Link to={PATHS.LOGIN_PAGE}>Login</Link>}

      {props.user ? <div>Hey {props.user.username}</div> : null}
      {props.user ? <div onClick={props.logout}>Logout</div> : null} */}
    </nav>
  );
}

export default Navbar;
