// Configuration
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import { NotFoundPage } from "../components/shared/404/NotFoundPage";
import RequireAuthMobile from "../components/shared/RequireAuth/RequireAuthMobile";
import agentRouteRenderer from "./Agent/agentRouteRenderer";
import kaziPublicRouteRenderer from "./Kazi/kaziPublicRouteRenderer";
import kaziRouteRenderer from "./Kazi/kaziRouteRenderer";
import lawyerRouteRenderer from "./lawyer/lawyerRouteRenderer";
import matrimonyPublicRouteRenderer from "./Matrimony/matrimonyPublicRouteRenderer";
import matrimonyRouteRenderer from "./Matrimony/matrimonyRouteRenderer";
import mobileMatrimony from "./Matrimony/MobileMatrimony/Mobilematrimony";
import mobileMatrimonyPrivateRoutes from "./Matrimony/MobileMatrimony/MobileMatrimonyPrivateRoutes";
import myAccountRouteRenderer from "./myAcount/myAccountRouteRenderer";
import shopRouteRenderer from "./shop/shopRouteRenderer";

const MasterRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* MATRIMONY PUBLIC ROUTE */}
                {matrimonyPublicRouteRenderer()}
                {/* MATRIMONY PRIVATE ROUTES */}
                {matrimonyRouteRenderer()}
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
                    <Route key={route.id} path={route.path} element={<RequireAuthMobile>{route.element}</RequireAuthMobile>}>
                        {route.nestedRoutes?.map(route => (
                            <Route key={route.id} path={route.path} element={<RequireAuthMobile>{route.element}</RequireAuthMobile>} />
                        ))}
                    </Route>
                ))}
                {/* KAZI ROUTES */}
                {kaziPublicRouteRenderer()}
                {/* KAZI PRIVATE ROUTES */}
                {kaziRouteRenderer()}
                {/* SHOP PRIVATE ROUTES */}
                {shopRouteRenderer()}
                {/* LAWYER PRIVATE ROUTES */}
                {lawyerRouteRenderer()}
                {/* Agent PublicRoutes */}
                {agentRouteRenderer()}
                {/* my account private routes */}
                {myAccountRouteRenderer()}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MasterRoute;
