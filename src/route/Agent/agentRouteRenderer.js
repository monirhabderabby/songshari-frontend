import { Route } from "react-router";
import AgentServicesPage from "../../components/pages/Agent/AgentServicesPage/AgentServicesPage";
import RequireAuth from "../../components/shared/RequireAuth/RequireAuth";
import AgentPrivateRoutes from "./AgentPrivateRoutes";

const agentRouteRenderer = () => {
    // agent private routes
    return AgentPrivateRoutes.map(route => {
        return (
            <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                <Route index element={<AgentServicesPage />} />
                {route.nestedRoutes?.map(route => {
                    return (
                        // first round
                        <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                            {route.nestedRoutes?.map(route => {
                                return (
                                    // second route
                                    <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                                        {route.nestedRoutes?.map(route => {
                                            return (
                                                // third rounnd
                                                <Route key={route.id} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>} />
                                            );
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

export default agentRouteRenderer;
