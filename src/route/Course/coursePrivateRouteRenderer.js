import { Route } from "react-router";
import coursePrivateRoutes from "./coursePrivateRoutes";

const coursePrivateRouteRenderer = () => {
    return coursePrivateRoutes.map(route => {
        return <Route key={route.id} path={route.path} element={route.element} />;
    });
};

export default coursePrivateRouteRenderer;
