import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
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
  // const { text, onAuthState } = useFirebaseContext();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create-account" component={RegistrationScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackScreens;
