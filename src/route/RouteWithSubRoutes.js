import { Route } from "react-router-dom";

const RouteWithSubRoutes = ({ path, Element }) => {
    return (
        <Route path={path} element={<Element/>} />
    );
};

export default RouteWithSubRoutes;