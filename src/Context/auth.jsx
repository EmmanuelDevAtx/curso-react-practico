import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isSignin, setIsSignin] = useState(true);
    const [email, setEmail] = useState('');

    //The password never save in some hook o storage, always use some Token to validate
    //In this case is only to the thecnical test 
    
    const [password, setPassword] = useState('');

    function singIn(item) {
        localStorage.setItem('auth', JSON.stringify(item));
        setEmail(item.email);
        setPassword(item.password);
        setIsSignin(true);
    }

    function logIn({ email, password }) {
        const authItems = JSON.parse(localStorage.getItem('auth'));
        if (authItems && authItems.email == email && authItems.password == password) {
            setIsSignin(true);
            setEmail(email);
            setPassword(password);
        }
        setIsSignin(false);
    }

    function logOut() {
        localStorage.removeItem('auth');
        setIsSignin(false);
        setEmail('');
        setPassword('');
    }

    function validAuth(){
        const authItems = JSON.parse(localStorage.getItem('auth'));
        if (!authItems) {
            setIsSignin(false);
            return;
        }

        setEmail(authItems.email);
        setPassword(authItems.password);
    }

    return (
        <AuthContext.Provider value={{ isSignin, email, singIn, logIn, logOut, validAuth, password }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}