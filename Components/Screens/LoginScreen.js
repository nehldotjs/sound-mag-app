import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UseCard } from "../../ContextProviders/CardContext";
import { FIREBASE_AUTH } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import { useFirebaseContext } from "../../ContextProviders/FirebaseAuth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onAuthState, setAuthState } = useFirebaseContext();

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((err) => alert(err.message));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setAuthState(user.uid);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    const opt = navigation.setOptions({
      headerShown: false
    });
    return opt;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        {/* LOGIN */}
        <TouchableOpacity
          onPress={handleLogin}
          style={[styles.customButton, { backgroundColor: "red" }]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* REGISTER */}
        <TouchableOpacity onPress={handleSignUp} style={styles.customButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  formContainer: {
    backgroundColor: "transparent",
    width: "100%",
    padding: 20,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10
  },
  customButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});
