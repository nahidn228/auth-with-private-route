/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscride = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("currently Logged in", currentUser);
        setUser(currentUser);
      } else {
        console.log("No user logged in");
        setUser(null);
      }
    });

    return () => {
      unSubscride();
    };
  }, []);

  const authInfo = {
    createUser,
    signIn,
    user,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
