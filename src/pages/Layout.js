import {
    Outlet,
    Link
} from 'react-router-dom';

import AuthProviderContext from '../services/AuthProviderContext';





export default function Layout() {



    return <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contato">Contato</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>

        </ul>


        <AuthProviderContext>
            <Outlet />
        </AuthProviderContext>

    </>
}