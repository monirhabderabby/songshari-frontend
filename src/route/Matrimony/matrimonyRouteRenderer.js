import { Route } from "react-router";
import RequireAuth from "../../components/shared/RequireAuth/RequireAuth";
import matrimonyPrivateRoutes from "./matrimonyPrivateRoutes";

const matrimonyRouteRenderer = () => {
    return matrimonyPrivateRoutes.map(route => (
        <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
            {route.nestedRoutes?.map(route => (
                <Route key={route.id} path={route?.path && route.path} element={route?.element && route.element}>
                    {route.nestedRoutes?.map(route => (
                        <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>} />
                    ))}
                </Route>
            ))}
        </Route>
    ));
};
export default matrimonyRouteRenderer;
