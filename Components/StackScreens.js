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
    console.log("useEffect - Setting up auth state change listener");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false); // Set loading to false once the authentication state is determined
      if (user) {
        setAuthState(true);
      } else {
        setAuthState(false);
      }
    });

    return () => {
      console.log("Cleaning up auth state change listener");
      unsubscribe();
    };
  }, []);

  if (loading) {
    // You might want to show a loading indicator or splash screen here
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
