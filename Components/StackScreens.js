import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS IMPORT

import OnboardingScreen from "./Screens/OnboardingScreen";
import HomeScreen from "./Screens/HomeScreen";

// SCREENS IMPORT

const Stack = createStackNavigator();

const StackScreens = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="OnBoard" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackScreens;
