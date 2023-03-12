import { Route } from "react-router";
import KaziServicesPage from "../../components/pages/Kazi/KaziServices/KaziServicesPages";
import RequireAuth from "../../components/shared/RequireAuth/RequireAuth";
import kaziPrivateRoutes from "./kaziPrivateRoutes";

const kaziRouteRenderer = () => {
    return kaziPrivateRoutes.map(route => {
        return (
            <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                <Route index element={<KaziServicesPage />} />
                {route.nestedRoutes?.map(route => {
                    return (
                        <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                            {route.nestedRoutes?.map(route => {
                                return (
                                    <Route key={route.id} path={route.path} element={route.element}>
                                        {route.nestedRoutes?.map(route => {
                                            return <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>} />;
                                        })}
                                    </Route>
                                );
                            })}
                        </Route>
                    );
                })}
            </Route>
        );
    });
};

export default kaziRouteRenderer;
