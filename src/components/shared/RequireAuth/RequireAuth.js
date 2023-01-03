import React from "react";
import { Navigate, useLocation } from "react-router";
import getCookie from "../../../Helper/cookies/getCookie";

const RequireAuth = ({ children }) => {
    const token = getCookie("token");
    let location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return children;
    }
};

export default RequireAuth;
