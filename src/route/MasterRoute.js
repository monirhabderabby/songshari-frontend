import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../components/shared/RequireAuth/RequireAuth";
import matrimonyPrivateRoutes from "./Matrimony/matrimonyPrivateRoutes";
import matrimonyRoutes from "./Matrimony/matrimonyRoutes";
import mobileMatrimony from "./Matrimony/MobileMatrimony/Mobilematrimony";
import mobileMatrimonyPrivateRoutes from "./Matrimony/MobileMatrimony/MobileMatrimonyPrivateRoutes";

// Routes

// Components

const MasterRoute = () => {
    return (
        <BrowserRouter>
            {/* MATRIMONY DESKTOP ROUTES */}
            <Routes>
                {matrimonyRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element}>
                        {route?.nestedRoutes?.map(route => (
                            <Route key={route.id} path={route?.path && route.path} element={route?.element && route.element} />
                        ))}
                    </Route>
                ))}
                {/* MATRIMONY PRIVATE ROUTES */}
                {matrimonyPrivateRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}>
                        {route.nestedRoutes?.map(route => (
                            <Route key={route.path} path={route?.path && route.path} element={route?.element && route.element}>
                                {route.nestedRoutes?.map(route => (
                                    <Route key={route.id} path={route.path} element={route.element} />
                                ))}
                            </Route>
                        ))}
                    </Route>
                ))}
                {/* MATRIMONY MOBILE ROUTES */}
                {mobileMatrimony.map(route => (
                    <Route key={route.id} path={route.path} element={route.element}>
                        {route.nestedRoutes?.map(route => (
                            <Route key={route.id} path={route.path} element={route.element} />
                        ))}
                    </Route>
                ))}
                {/* MATRIMONY PRIVATE MOBILE ROUTES */}
                {mobileMatrimonyPrivateRoutes.map(route => (
                    <Route key={route.id} path={route.path} element={route.element}>
                        {route.nestedRoutes?.map(route => (
                            <Route key={route.id} path={route.path} element={route.element} />
                        ))}
                    </Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default MasterRoute;
