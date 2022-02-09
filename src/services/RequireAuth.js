import React from 'react';
import fakeAuthenticated from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {

    let location = useLocation();

    if (!fakeAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

}

export default RequireAuth;