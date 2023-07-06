import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect,useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor:"red"}} >OnboardingScreen</Text>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItem: "center",
    display: "flex"
  }
});
