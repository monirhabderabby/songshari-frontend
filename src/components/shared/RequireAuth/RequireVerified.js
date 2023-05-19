import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const RequireVerified = ({ children }) => {
    let location = useLocation();
    const loggedInUserProfile = useSelector(state => state.persistedReducer.userInfo.userInfo?.user);
    const { isEmailVerified } = loggedInUserProfile || {};
    if (isEmailVerified) {
        return children;
    } else {
        return <Navigate to="/verification_lander" state={{ from: location }} replace />;
    }
};

export default RequireVerified;
