import { createContext, useContext, useState } from "react";
import { json } from "react-router-dom";


const LoginContext = createContext('');

export const LoginProvider = (props) => {
    const [login, setLogin] = useState(false);
    const handleLogin = (cred) => {
        console.log('handle Sign up');
        console.log(login);
    }
    const handleSignup = (cred) => {
        const user = cred;
        const users = JSON.parse(localStorage.getItem("users")) || {};
        newUsers = { ...users, user };
        localStorage.setItem("users", JSON.stringify(newUsers));
        console.log(JSON.parse(localStorage.getItem("users")));
        alert('j');
    }


    return (
        <LoginContext.Provider value={{ handleLogin, handleSignup }}>
            {props.children}
        </LoginContext.Provider>
    )
}
export const useAuthContext = () => useContext(LoginContext)

