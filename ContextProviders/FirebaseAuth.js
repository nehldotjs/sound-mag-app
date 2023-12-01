import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState, createContext } from "react";

const firebaseContext = createContext();

const FirebaseAuth = () => {
  return ( 
    <>
      <firebaseContext.Provider value={fireAuth}>
        {props.children}
      </firebaseContext.Provider>
    </>
  );
};

function useFirebaseContext() {
  const baseContext = useContext(firebaseContext);
  if (!firebaseContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return baseContext;
}

const fireAuth = () => {
  const result = { text: "fire base auth provider", numb: 3 };
  return result;
};

export { FirebaseAuth, fireAuth };

const styles = StyleSheet.create({});
