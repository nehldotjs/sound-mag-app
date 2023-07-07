import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackScreens from "./Components/StackScreens";
import { CardContext } from "./ContextProviders/CardContext";

export default function App() {
  return (
    <>
      <CardContext>
        <NavigationContainer>
          <StackScreens />
        </NavigationContainer>
      </CardContext>
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
