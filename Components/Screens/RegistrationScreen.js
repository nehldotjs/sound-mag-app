import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase";

const RegistrationScreen = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const handleInputChange = (field, value) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [field]: value }));
  };

  const handleRegistration = async () => {
    try {
      const { email, password, username } = userInfo;
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        username
      );
      const user = userCredentials.user;
      console.log("User Info:", user);
      redirectToHome();
    } catch (error) {
      alert(error.message);
    }
  };

  const redirectToHome = () => {
    navigation.navigate("HomeScreen"); // Assuming you want to navigate to "HomeScreen" after registration
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.legalNameContainer}>
            <View style={styles.legalnameWrapper}>
              <Text style={styles.label}>Firstname</Text>
              <TextInput placeholder="firstname"></TextInput>
            </View>

            <View style={styles.legalnameWrapper}>
              <Text style={styles.label}>Lastname</Text>
              <TextInput placeholder="lastname"></TextInput>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder="Suggest a username"
              onChangeText={(text) => handleInputChange("username", text)}
            />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter email address"
              onChangeText={(text) => handleInputChange("email", text)}
            />
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="Password" secureTextEntry />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Confirm password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => handleInputChange("password", text)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  legalNameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    width: "100%"
  },
  label: { fontSize: 20, fontWeight: "bold" },
  wrapper: { backgroundColor: "orange", width: "100%", gap: 5 },
  legalnameWrapper: { gap: 10, flex: 1, backgroundColor: "pink" }
});
