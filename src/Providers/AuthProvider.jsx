/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



 export const AuthContext= createContext(null)

 const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
const createUser=(email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const singIn =(email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
}


const logOut = ()=>{
    return signOut(auth);
}

useEffect(() =>{
   const unSubscribe= onAuthStateChanged(auth,currenUser =>{
        console.log('use in the auth state changed',currenUser);
        setUser(currenUser)
    });
    return () =>{
        unSubscribe();
    }
},[])
    const authInfo ={
        user,
        createUser,
        logOut,
        singIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;