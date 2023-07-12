import { Route } from "react-router";
import RequireAuth from "../../components/shared/RequireAuth/RequireAuth";
import shopPrivateRoutes from "./shopPrivateRoutes";

const shopRouteRenderer = () => {
  return shopPrivateRoutes.map((route) => {
    return (
      <Route
        key={route.id}
        path={route.path}
        element={<RequireAuth>{route.element}</RequireAuth>}
      >
        {route.nestedRoutes?.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={<RequireAuth>{route.element}</RequireAuth>}
            />
          );
        })}
      </Route>
    );
  });
};

export default shopRouteRenderer;
