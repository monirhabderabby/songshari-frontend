import { Route } from "react-router";
import matrimonyRoutes from "./matrimonyRoutes";

const matrimonyPublicRouteRenderer = () => {
    return matrimonyRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.element}>
            {route?.nestedRoutes?.map(route => (
                <Route key={route.id} path={route?.path && route.path} element={route?.element && route.element} />
            ))}
        </Route>
    ));
};

export default matrimonyPublicRouteRenderer;
