// Configuration
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import { NotFoundPage } from "../components/shared/404/NotFoundPage";
import agentRouteRenderer from "./Agent/agentRouteRenderer";
import coursePrivateRouteRenderer from "./Course/coursePrivateRouteRenderer";
import coursePublicRouteRenderer from "./Course/coursePublicRouteRenderer";
import kaziPublicRouteRenderer from "./Kazi/kaziPublicRouteRenderer";
import kaziRouteRenderer from "./Kazi/kaziRouteRenderer";
import matrimonyMobilePublicRouteRenderer from "./Matrimony/MobileMatrimony/matrimonyMobilePublicRouteRenderer";
import matrimonyMobileRouteRenderer from "./Matrimony/MobileMatrimony/matrimonyMobileRouteRenderer";
import matrimonyPublicRouteRenderer from "./Matrimony/matrimonyPublicRouteRenderer";
import matrimonyRouteRenderer from "./Matrimony/matrimonyRouteRenderer";
import packageRouteRendered from "./Package/packageRouteRendered";
import lawyerRouteRenderer from "./lawyer/lawyerRouteRenderer";
import myAccountRouteRenderer from "./myAcount/myAccountRouteRenderer";
import shopRouteRenderer from "./shop/shopRouteRenderer";
import packageRouteRendered from "./Package/packageRouteRendered";
import renderVideoCall from "./videoCall/renderVideoCall";

const MasterRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* MATRIMONY PUBLIC ROUTE */}
        {matrimonyPublicRouteRenderer()}
        {/* MATRIMONY PRIVATE ROUTES */}
        {matrimonyRouteRenderer()}
        {/* MATRIMONY MOBILE ROUTES */}
        {matrimonyMobilePublicRouteRenderer()}
        {/* MATRIMONY PRIVATE MOBILE ROUTES */}
        {matrimonyMobileRouteRenderer()}
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
        {/* Course Private Routes */}
        {coursePrivateRouteRenderer()}
        {/* Course Public routes */}
        {coursePublicRouteRenderer()}
        {/* Package routes */}
        {packageRouteRendered()}
        {/* Video call routes */}
        {renderVideoCall()}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MasterRoute;
