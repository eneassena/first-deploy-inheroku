import React from 'react';

import AuthContext from './AuthContext';
import fakeAuthenticated from '../auth';



const AuthProviderContext = (props) => {
    const [user, setUser] = React.useState(null);


    const signin = (credencias) => {
        let auth = fakeAuthenticated(credencias);
        if (auth) {
            setUser(credencias);
            return;
        } else {
            setUser(null);
            return;
        }
    }

    const signout = () => {
        setUser(null);
    }


    let value = { user, signin, signout };

    return (
        <>
            <AuthContext.Provider value={value}>
                {props.children}
            </AuthContext.Provider>
        </>
    );

}

export default AuthProviderContext;