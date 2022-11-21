import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import { auth } from '../../../firebase.init';

const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading || error) {
        return;
    };

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return children;
    }
};

export default RequireAuth;