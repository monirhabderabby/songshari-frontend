import React from 'react';
import { BrowserRouter as Router, Routes } from "react-router-dom";
// Routes
import mobileRoutes from './mobileRoutes';

// Components
import RouteWithSubRoutes from './RouteWithSubRoutes';

const MasterRoute = () => {
    return (
        <Router>
            <Routes>
                {mobileRoutes.map(
                    (route, i) => <RouteWithSubRoutes key={i} {...route} />)
                }
            </Routes>
        </Router>
    )
}

export default MasterRoute;