import { Route } from "react-router";
import MobileMatrimony from "./Mobilematrimony";

const matrimonyMobilePublicRouteRenderer = () => {
    return MobileMatrimony.map(route => (
        <Route key={route.id} path={route.path} element={route.element}>
            {route.nestedRoutes?.map(route => (
                <Route key={route.id} path={route.path} element={route.element} />
            ))}
        </Route>
    ));
};

export default matrimonyMobilePublicRouteRenderer;
