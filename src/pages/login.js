import React from 'react';
import './globals.css';


const LoginPage = (props) => {
    const [login, setLogin] = React.useState(''),
        [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');



    function handleSubmit(e) {

        e.preventDefault();

        if (!login || !password) {
            alert('Credencias invalidas');
        } else {
            let response = props.login({ login, password });
            setMessage(response === true ? 'Login Realizado com sucesso' : response);
        }
    }


    return (
        <>
            <section className="error-message">
                {message}
            </section>
            <hr />
            <form onSubmit={handleSubmit}>
                <p>Login: <input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    type="text"
                /></p>

                <p>Password: <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /></p>

                <p><button type="submit">Logar</button> </p>
            </form>
        </>
    )
};


export default LoginPage;
