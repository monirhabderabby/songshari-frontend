import React from "react";
import { isExpired } from "react-jwt";
import { Navigate, useLocation } from "react-router";
import getCookie from "../../../Helper/cookies/getCookie";

const RequireAuth = ({ children }) => {
    const token = getCookie("token");
    let location = useLocation();

    if (token && !isExpired(token)) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default RequireAuth;
