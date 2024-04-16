import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isSignin, setIsSignin] = useState(true);
    const [email, setEmail] = useState('');

    function singIn(item) {
        localStorage.setItem('auth', JSON.stringify(item));
        setEmail(item.email);
        setIsSignin(true);
    }

    function logIn({ email, password }) {
        const authItems = JSON.parse(localStorage.getItem('auth'));
        if (authItems && authItems.email == email && authItems.password == password) {
            setIsSignin(true);
            setEmail(email);
        }
        setIsSignin(false);
    }

    function logOut() {
        localStorage.removeItem('auth');
        setIsSignin(false);
    }

    function validAuth(){
        const authItems = JSON.parse(localStorage.getItem('auth'));
        if (!authItems) {
            setIsSignin(false);
        }
    }

    return (
        <AuthContext.Provider value={{ isSignin, email, singIn, logIn, logOut, validAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}