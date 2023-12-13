import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase"

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
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => handleInputChange("username", text)}
      />

      <TextInput
        placeholder="Email"
        onChangeText={(text) => handleInputChange("email", text)}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => handleInputChange("password", text)}
      />

      <TouchableOpacity onPress={handleRegistration}>
        <Text>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={redirectToHome}>
        <Text>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});
