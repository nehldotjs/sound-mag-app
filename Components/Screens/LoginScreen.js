import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import bckGrndImg from "../../assets/images/pexels-tobi-loke-4334212.jpg";

const LoginScreen = () => {
  const windowsWidth = Dimensions.get("window").width;
  const windowsHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const getStarted = () => {
    navigation.navigate("SubLogin");
  };
  return (
    <>
      <View style={{ height: windowsHeight }}>
        <TouchableOpacity
          style={{
            width: "50%",
            position: "absolute",
            zIndex: 2,
            bottom: 40,
            marginHorizontal: "25%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 30
          }}
          onPress={getStarted}>
          <Text
            style={{ color: "orangered", fontWeight: "bold", fontSize: 15 }}>
            Get Started
          </Text>
        </TouchableOpacity>
        <Image source={bckGrndImg} style={styles.bckgrndImageStyle} />
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
    // Add an overlay to the background image
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 50
  },
  formContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    margin: "auto",
    borderRadius: 20,
    padding: 30,
    gap: 10,
    backgroundColor: "white"
    // flex: 1
  },
  textInput: {
    height: 50,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    backgroundColor: "white" // Add a background color for better visibility
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  bckgrndImageStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  inputContainer: {
    width: "100%",
    gap: "10px"
  },
  googleBtn: {
    gap: 10,
    height: 50,
    width: "80%",
    padding: "10px",
    shadowColor: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    fontWeight: "bold",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 5
  },
  facebookBtn: {
    gap: 10,
    height: 50,
    width: "80%",
    padding: "10px",
    shadowColor: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    fontWeight: "bold",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 5
  }
});
