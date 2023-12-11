import React, { useContext, createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FIREBASE_AUTH } from "../firebase";
const firebaseContextProvider = createContext();
const fireAuth = () => {
  const [onAuthState, setAuthState] = useState(false); // Change initial state to null
  const auth = FIREBASE_AUTH;
  const userId = auth?.currentUser?.uid;
  const result = {
    text: "firebase auth provider is ready ",
    onAuthState,
    setAuthState,
    userId
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
      "useFirebaseContext must be used within a FirebaseAuthProvider...."
    );
  }
  return baseContext;
}
export { FirebaseAuth, useFirebaseContext };
