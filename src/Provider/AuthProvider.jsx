import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from './../fr';

 export const AuthContext = createContext(null)
 const auth = getAuth(app);

 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

const googleSignIn = () =>{
    setLoading(true)
  return signInWithPopup(auth, googleProvider)
}
const logOut = () => {
    setLoading(true)
        return signOut(auth);
      };

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user auth changed", currentUser);
      setUser(currentUser);
        setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo={
user,
googleSignIn,
logOut,
loading,

}
    return (
        <AuthContext.Provider value={authInfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children : PropTypes.node
}