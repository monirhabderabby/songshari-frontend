import { Route } from "react-router";
import kaziRoutes from "./kaziRoutes";

const kaziPublicRouteRenderer = () => {
    return kaziRoutes.map(route => {
        return (
            <Route key={route.id} path={route.path} element={route.element}>
                {route.nestedRoutes?.map(route => {
                    return <Route key={route.id} path={route.path} element={route.element} />;
                })}
            </Route>
        );
    });
};

export default kaziPublicRouteRenderer;
