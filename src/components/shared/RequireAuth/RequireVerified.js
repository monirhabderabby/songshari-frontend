import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const RequireVerified = ({ children }) => {
    let location = useLocation();
    const isVerified = useSelector(state => state.persistedReducer?.verificationSlice?.isVerified);
    if (isVerified) {
        return children;
    } else {
        return <Navigate to="/verification_lander" state={{ from: location }} replace />;
    }
};

export default RequireVerified;
