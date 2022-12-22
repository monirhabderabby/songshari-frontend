import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import matrimoniRoutes from './Matrimony/matrimonyRoutes'

// Components

const MasterRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {matrimoniRoutes.map(
                    (rout, i) => <Route path={rout.path} element={<rout.element/>} />
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default MasterRoute;