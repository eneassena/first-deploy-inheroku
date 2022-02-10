import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from '../services/useAuthContext';


export const Logout = (props) => {
    const auth = useAuthContext();
    const location = useLocation();

    function logoutUser() {
        props.signout();
    }

    if (!auth.user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <>
        <button onClick={logoutUser}>
            Sign out
        </button>
    </>;
}