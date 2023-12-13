import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView
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
    console.loog("Signup");
  };

  return (
    <>
      <View style={[styles.overlay]}>
        <KeyboardAvoidingView style={{ height: windowsHeight }}>
          <View style={[styles.formContainer, { width: windowsWidth * 0.9 }]}>
            <Text style={styles.titleStyle}>Login to Fashein</Text>
            <View style={styles.inputContainer}>
              <Text>Email</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Password</Text>
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
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={{ color: "gray", fontWeight: "bold" }}>Or</Text>
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
      </View>
    </>
  );
};

export default LoginModal;

const styles = StyleSheet.create({});
