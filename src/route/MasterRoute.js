import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../components/shared/RequireAuth/RequireAuth";
import matrimonyPrivateRoutes from "./Matrimony/matrimonyPrivateRoutes";
import matrimonyRoutes from "./Matrimony/matrimonyRoutes";

// Routes

// Components

const MasterRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {matrimonyRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element}>
                        {route?.nestedRoutes?.map(route => (
                            <Route key={route.id} path={route?.path && route.path} element={route?.element && route.element} />
                        ))}
                    </Route>
                ))}
                {matrimonyPrivateRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                        {route.nestedRoutes?.map(route => (
                            <Route key={route.path} path={route?.path && route.path} element={route?.element && route.element} />
                        ))}
                    </Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default MasterRoute;
