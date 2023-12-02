import React, { useContext, useState, useEffect, createContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FIREBASE_AUTH } from "../firebase";

const firebaseContextProvider = createContext();
const fireAuth = () => {
  const [onAuthState, setAuthState] = useState(true);
  const auth = FIREBASE_AUTH;
  console.log(auth);
  useEffect(() => {
    console.log("useEffect - Setting up auth state change listener");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("onAuthStateChanged - User changed:", user);
      if (user) {
        setAuthState(true);
        console.log("USER LOGGED IN :", onAuthState);
      }
    });

    return () => {
      console.log("Cleaning up auth state change listener");
      unsubscribe();
    };
  }, []);

  const result = {
    text: "firebase auth provider",
    onAuthState
  };
  return result;
};

const FirebaseAuth = ({ children }) => {
  return (
    <firebaseContextProvider.Provider value={fireAuth()}>
      {children}
    </firebaseContextProvider.Provider>
  );
};

function useFirebaseContext() {
  const baseContext = useContext(firebaseContextProvider);
  if (!baseContext) {
    throw new Error(
      "useFirebaseContext must be used within a FirebaseAuthProvider"
    );
  }
  return baseContext;
}

export { FirebaseAuth, useFirebaseContext };
