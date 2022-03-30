import React, { useState, useEffect } from "react";
export const AuthContext = React.createContext();
const LOCAL_STORAGE_USER = '@caresystem:user';

export function LoginProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [loading, setLoading] = useState(false);

    function updateUser(id) {
        localStorage.setItem(LOCAL_STORAGE_USER, id);
        setLoading(true);
        setCurrentUser(id);
        setLoading(false);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    /* 
   useEffect(() => {
        const cancelAuthListener = firebase.auth().onIdTokenChanged((u) => {
            setCurrentUser(u);
            setLoading(false);
        });
        return () => cancelAuthListener();
    }, []);
    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (user) => {
             setCurrentUser(user)
             setLoading(false)
         });
 
         return () => {
             unsubscribe();
         };
     }, [])*/

    const value = {
        currentUser,
        updateEmail,
        updatePassword,
        setLoading,
        updateUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}