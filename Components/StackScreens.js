import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// FIREBASE IMPORTS
import { FIREBASE_AUTH } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
// FIREBASE IMPORTS

// CONTEXT IMPORTS
import { useFirebaseContext } from "../ContextProviders/FirebaseAuth";
// CONTEXT IMPORTS

// SCREENS IMPORT
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
// SCREENS IMPORT

const Stack = createStackNavigator();

const StackScreens = () => {
  const { onAuthState, setAuthState } = useFirebaseContext();
  const [loading, setLoading] = useState(true);
  const auth = FIREBASE_AUTH;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      try {
        if (user) {
          setAuthState(true);
        }
      } catch (err) {
        console.error(err);
      }
    });

    return () => {
      console.log("Cleaning up auth state change listener");
      unsubscribe();
    };
  }, []);

  return (
    <Stack.Navigator>
      {onAuthState ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Create-account" component={RegistrationScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackScreens;
