


const fakeAuthenticated = (credencias) => { // login, password
    if (credencias.login === 'user' && credencias.password === 'user123') {
        return true;
    }
    return false;
};


export default fakeAuthenticated;