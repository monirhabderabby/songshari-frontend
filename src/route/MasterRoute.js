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
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
                {matrimonyPrivateRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default MasterRoute;
