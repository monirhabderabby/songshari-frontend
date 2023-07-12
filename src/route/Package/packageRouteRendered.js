import React from "react";
import { Route } from "react-router";
import packageRoute from "./packageRoute";

const packageRouteRendered = () => {
  return packageRoute.map((route) => {
    return <Route path={route.path} element={route.element} />;
  });
};

export default packageRouteRendered;
