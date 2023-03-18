import { Route } from "react-router";
import courseRoute from "./courseRoute";

const coursePublicRouteRenderer = () => {
    return courseRoute.map(route => {
        return <Route path={route.path} element={route.element} />;
    });
};

export default coursePublicRouteRenderer;
