import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackScreens from "./Components/StackScreens";

// CONTEXT IMPORTS
import { CardContext } from "./ContextProviders/CardContext";
import { FirebaseAuth } from "./ContextProviders/FirebaseAuth";
// CONTEXT IMPORTS

export default function App() {
  return (
    <>
      <FirebaseAuth>
        <CardContext>
          <NavigationContainer>
            <StackScreens />
          </NavigationContainer>
        </CardContext>
      </FirebaseAuth>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
