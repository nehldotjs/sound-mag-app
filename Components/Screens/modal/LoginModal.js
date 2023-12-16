import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useFirebaseContext } from "../../../ContextProviders/FirebaseAuth";
import { FIREBASE_AUTH } from "../../../firebase";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useFirebaseContext();
  const auth = FIREBASE_AUTH;

  const windowsWidth = Dimensions.get("window").width;
  const windowsHeight = Dimensions.get("window").height;

  const navigation = useNavigation();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setAuthState(user.uid);
      })
      .catch((err) => alert(err.message));
  };

  const googleSignin = () => {
    console.log("HELLO WORLD");
  };
  const signUpBtn = () => {
    console.log("Signup");
  };

  return (
    <>
      <SafeAreaView>
        <View style={[styles.maincontainer, { height: windowsHeight }]}>
          <KeyboardAvoidingView
            style={{
              // backgroundColor: "white",
              borderRadius: 5,
              // paddingHorizontal: 10,
              width: windowsWidth * 0.9
            }}>
            <View style={[styles.formContainer, { width: windowsWidth * 0.9 }]}>
              <Text style={styles.titleStyle}>Connect to kipicool</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <TouchableOpacity
                onPress={handleLogin}
                style={[styles.loginButton]}>
                <Text style={styles.loginBtnText}>Login</Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  margin: "auto",
                  fontWeight: "bold"
                }}>
                Or
              </Text>
              <TouchableOpacity onPress={googleSignin} style={styles.googleBtn}>
                <AntDesign name="google" size={24} color="orangered" />
                <Text style={{ fontWeight: "bold", color: "gray" }}>
                  Continue with Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.facebookBtn}>
                <AntDesign name="facebook-square" size={24} color="blue" />
                <Text style={{ fontWeight: "bold", color: "gray" }}>
                  Continue with Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ fontWeight: "bold", color: "blue" }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
              <Text style={{ color: "gray", fontWeight: "bold", fontSize: 14 }}>
                Don't have an account yet?
                <TouchableOpacity onPress={signUpBtn}>
                  <Text style={{ color: "blue" }}> Sign up here</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </KeyboardAvoidingView>
          <View
            style={{
              backgroundColor: "black",
              height: "100%",
              width: "100%",
              position: "absolute",
              opacity: 0.4,
              margin: "auto",
              zIndex: -1
            }}></View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginModal;
const styles = StyleSheet.create({
  maincontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    paddingVertical: 40,
    paddingHorizontal: 40
  },
  formContainer: {
    gap: 15,
    borderRadius: 5,
    paddingVertical: 10,
    justifyContent: "space-evenly",
    backgroundColor: "white"
  },
  titleStyle: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    width: "70%",
    margin: "auto",
    borderBottom: 1,
    borderColor: "black"
  },
  inputContainer: {
    paddingHorizontal: 10,
    height: "auto",
    width: "100%"
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  textInput: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  loginButton: {
    backgroundColor: "black",
    textAlign: "center",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  loginBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },
  googleBtn: {
    backgroundColor: "white",
    textAlign: "center",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
    border: 2,
    borderColor: "black"
  },
  facebookBtn: {
    backgroundColor: "white",
    textAlign: "center",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10
  }
});
