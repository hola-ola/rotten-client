import React from "react";
import * as PATHS from "../../utils/paths";
import { Route } from "react-router-dom";

function NormalRoute(props) {
  const { exact, path, component: Component, user, ...componentProps } = props;

  return (
    <Route
      exact={exact}
      path={path}
      user={user}
      render={(reactRouterProps) => (
        <Component {...reactRouterProps} {...componentProps} />
      )}
    />
  );
}

export default NormalRoute;
