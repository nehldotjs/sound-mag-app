import { View, Text, StyleSheet, Image } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
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
      <View
        style={{
          bottom: "0px",
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItem: "flex-end",
          backgroundColor: "orangered"
        }}>
        <Text style={{ backgroundColor: "skyblue" }}>OnboardingScreen</Text>
        <Text style={{ backgroundColor: "skyblue" }}>
          OnboardingScreen pixu way
        </Text>
      </View>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItem: "center",
    display: "flex"
  },
  avatar: {
    height: "100%",
    width: "60%",
    margin: "auto",
    resizeMode: "contain",
    backgroundColor: "yellow",
    position: "relative"
  }
});
