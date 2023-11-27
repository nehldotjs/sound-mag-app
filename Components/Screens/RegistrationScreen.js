// RegistrationScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import ImagePicker from "react-native-image-picker";

const RegistrationScreen = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    profileImage: null
  });

  const handleImageUpload = () => {
    const options = {
      title: "Select Profile Image",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel || response.error || response.customButton) {
        console.log(
          "Image picker error:",
          response.error || response.customButton
        );
      } else {
        setUserInfo({ ...userInfo, profileImage: response.uri });
      }
    });
  };

  const handleRegistration = () => {
    // Implement your registration logic here
    console.log("User Info:", userInfo);
  };

  return (
    <View style={styles.container}>
      {userInfo.profileImage ? (
        <Image
          source={{ uri: userInfo.profileImage }}
          style={styles.profileImage}
        />
      ) : (
        <TouchableOpacity onPress={handleImageUpload}>
          <Text style={styles.uploadText}>Select Profile Image</Text>
        </TouchableOpacity>
      )}

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
