import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            </Routes>
        </BrowserRouter>
    );
};

export default MasterRoute;
