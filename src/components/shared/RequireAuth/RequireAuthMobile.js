import React from "react";
import { isExpired } from "react-jwt";
import { Navigate, useLocation } from "react-router";
import getCookie from "../../../Helper/cookies/getCookie";

const RequireAuthMobile = ({ children }) => {
    const token = getCookie("token");
    let location = useLocation();

    if (token && !isExpired(token)) {
        return children;
    } else {
        return <Navigate to="/mobile-login" state={{ from: location }} replace />;
    }
};

export default RequireAuthMobile;
