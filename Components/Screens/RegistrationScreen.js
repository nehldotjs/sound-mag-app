import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Input, Button } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase";

const RegistrationScreen = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const handleRegistration = () => {
    const { email, password, username } = userInfo; // Destructure userInfo
    createUserWithEmailAndPassword(auth, email, password, username)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((err) => alert(err.message));
    console.log("User Info:", userInfo);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Username"
        onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
      />

      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  uploadText: {
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 20
  }
});

export default RegistrationScreen;
