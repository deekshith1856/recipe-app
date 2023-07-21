import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginContext = createContext('');

export const LoginProvider = (props) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    const [error, setError] = useState({
        email: false,
        password: false
    })
    const handleLogin = (cred) => {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.map((obj) => {
            if (obj.email === cred.email) {
                setError({
                    email: true,
                    password: false
                })
                if (obj.password === cred.password) {
                    setError({
                        email: true,
                        password: true
                    })
                    let user = obj;
                    localStorage.setItem('user', JSON.stringify(user));
                    setLogin(true);
                    navigate('/home');
                }
            }
        })


    }
    const handleSignup = (cred) => {
        console.log(cred);
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(cred);
        localStorage.setItem('users', JSON.stringify(users));
        alert(`registered successfully`)
        navigate('/');
    }
    const handleLogout = () => {
        let users = JSON.parse(localStorage.getItem('users'));

        let user = JSON.parse(localStorage.getItem('user'));
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == user.email) {
                users[i] = user;
            }
        }

        localStorage.setItem('users', JSON.stringify(users));

        setLogin(false);
        users.map
        localStorage.setItem('user', {});
        navigate('/')
    }

    return (
        <LoginContext.Provider value={{ handleLogin, handleSignup, handleLogout, login }}>
            {props.children}
        </LoginContext.Provider>
    )
}
export const useAuthContext = () => useContext(LoginContext)

