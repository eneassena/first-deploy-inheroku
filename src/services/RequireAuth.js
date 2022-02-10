import React from 'react';
import LoginPage from '../pages/login';
import { Logout } from '../pages/Logout';
import useAuthContext from './useAuthContext';


const RequireAuth = ({ children }) => {
    const auth = useAuthContext();

    function loginUser(c) {
        auth.signin(c);
    }

    function logout() {
        auth.signout();
    }


    if (!auth.user) {
        return <LoginPage login={loginUser} />;
    }

    return <>
        <div>
            Seja Bem vindo(a), {auth.user.login.toUpperCase()} a nossa plataforma! <br /><br />
            &nbsp;
            <Logout signout={logout} />
        </div>

        {children}
    </>;

}

export default RequireAuth;