import { Route } from "react-router";
import { Account } from "../../components/pages/MyOrders/Account";
import RequireAuth from "../../components/shared/RequireAuth/RequireAuth";
import myAccountPrivateRoutes from "./myAccountPrivateRoutes";

const myAccountRouteRenderer = () => {
    return myAccountPrivateRoutes.map(route => {
        return (
            <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                <Route index element={<Account />} />
                {route.nestedRoutes.map(route => {
                    // first round
                    return <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>} />;
                })}
            </Route>
        );
    });
};

export default myAccountRouteRenderer;
