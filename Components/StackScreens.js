import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FIREBASE_AUTH } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebaseContext } from "../ContextProviders/FirebaseAuth";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

import TestScreen from "./TestScreen";

const Stack = createStackNavigator();

const StackScreens = () => {
  const { onAuthState, setAuthState } = useFirebaseContext();
  const [loading, setLoading] = useState(true);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {onAuthState ? (
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Group>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Group presentation="modal"> */}
          <Stack.Screen name="SubLogin" component={RegistrationScreen} />
          <Stack.Screen name="TestScreen" component={TestScreen} />
          {/* </Stack.Group> */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackScreens;
