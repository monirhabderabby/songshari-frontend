import { Route } from "react-router";
import RequireAuthMobile from "../../../components/shared/RequireAuth/RequireAuthMobile";
import MobileMatrimonyPrivateRoutes from "./MobileMatrimonyPrivateRoutes";

const matrimonyMobileRouteRenderer = () => {
    return MobileMatrimonyPrivateRoutes.map(route => (
        <Route key={route.id} path={route.path} element={<RequireAuthMobile>{route.element}</RequireAuthMobile>}>
            {route.nestedRoutes?.map(route => (
                <Route key={route.id} path={route.path} element={<RequireAuthMobile>{route.element}</RequireAuthMobile>} />
            ))}
        </Route>
    ));
};

export default matrimonyMobileRouteRenderer;
