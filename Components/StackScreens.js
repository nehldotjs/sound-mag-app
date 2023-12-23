import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase";
import { useFirebaseContext } from "../ContextProviders/FirebaseAuth";

import HomeScreen from "./screens/HomeScreen";
import LoginModal from "./screens/modal/LoginModal";
import SplashScreen from "./screens/SplashScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

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

  const renderAuthenticatedScreens = () => (
    <Stack.Group>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Group>
  );
  const renderUnauthenticatedScreens = () => (
    <>
      <Stack.Group>
        <Stack.Screen name="SignUpScreen" component={RegistrationScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="LoginModal" component={LoginModal} />
      </Stack.Group>
    </>
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {onAuthState
        ? renderAuthenticatedScreens()
        : renderUnauthenticatedScreens()}
    </Stack.Navigator>
  );
};

export default StackScreens;
