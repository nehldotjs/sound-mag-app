import React, { useContext, createContext,useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const firebaseContextProvider = createContext();
const fireAuth = () => {
  const [onAuthState, setAuthState] = useState(null); // Change initial state to null

  const result = {
    text: "firebase auth provider",
    onAuthState,
    setAuthState
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
