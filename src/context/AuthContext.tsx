import {useContext, createContext, useEffect, useState} from "react";
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import Home from "../pages/Home";
import { Link, Navigate } from "react-router-dom";

const AuthContext = createContext<any | null>(null);

export const AuthContextProvider = ({children}: any) => {
    const [user, setUser] = useState();

    const googleSignIn = () => {
        const provider =  new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any)=> {
            setUser(currentUser);
            console.log('User', currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={ { googleSignIn, logOut, user } }>
            {children}
        </AuthContext.Provider>
    );
    
}

export const UserAuth = () => {
    return useContext(AuthContext)
}