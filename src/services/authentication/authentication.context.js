import React, { createContext, useMemo, useState } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext  = createContext();
export const AuthenticationContextProvider  = ({ children }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ error, setError ] = useState([]);

    const onLogin = async (email, password) => {
        setIsLoading(true);
        try {
            const u = await loginRequest(email, password);
            setUser(u);
        } catch (e) {
            setError(e.toString());
        } finally {
            setIsLoading(false);
        }
        };

    const onRegister = (email, password, repeatedPassword) => {
        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((u) => {
            setUser(u);
            setIsLoading(false);
            })
            .catch((e) => {
            setIsLoading(false);
            setError(e.toString());
            });
        };

    return (
        <AuthenticationContext.Provider value = {{
            isAuthenicated: !!user,
            user,
            isLoading,
            error,
            onLogin,
            onRegister,         
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}