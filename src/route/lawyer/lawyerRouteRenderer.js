import { Route } from "react-router";
import LawyerServicesPage from "../../components/Lawyer/LawyerServicesPage/LawyerServicesPage";
import RequireAuth from "../../components/shared/RequireAuth/RequireAuth";
import lawyerPrivateRoutes from "./LawyerPrivateRoutes";

const lawyerRouteRenderer = () => {
    return lawyerPrivateRoutes.map(route => {
        return (
            <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                <Route index element={<LawyerServicesPage />} />
                {route.nestedRoutes?.map(route => {
                    return (
                        <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                            {route.nestedRoutes?.map(route => {
                                return (
                                    <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
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

export default lawyerRouteRenderer;
