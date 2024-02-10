import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebase";

const RegistrationScreen = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "" 
  });

  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");

  const [isMatch, setIsMatch] = useState(false);

  const windowsWidth = Dimensions.get("window").width;
  const windowsHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation, isMatch]);

  const handleInputChange = (field, value) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value
    }));
  };

  const handleMatch = () => {
    password === passwordMatch ? true : false;
  };

  console.log("password:", password, "confirm:", passwordMatch, isMatch);
  
  const handleRegistration = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        username
      );
      const user = userCredentials.user;
      navigation.navigate("HomeScreen");
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePage = () => {
    navigation.navigate("LoginModal");
  };

  return (
    <SafeAreaView
      style={{
        height: windowsHeight,
        width: windowsWidth,
        justifyContent: "center"
      }}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.heading}>Create your account.</Text>

          <View style={styles.nameContainer}>
            <View style={styles.nameWrapper}>
              <Text style={styles.label}>Firstname</Text>
              <TextInput
                placeholder="Firstname"
                style={styles.inputStyle}
                onChangeText={(text) => handleInputChange("firstname", text)}
              />
            </View>
            <View style={styles.nameWrapper}>
              <Text style={styles.label}>Lastname</Text>
              <TextInput
                placeholder="Lastname"
                style={styles.inputStyle}
                onChangeText={(text) => handleInputChange("lastname", text)}
              />
            </View>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Username"
              onChangeText={(text) => handleInputChange("username", text)}
            />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              onChangeText={(text) => handleInputChange("email", text)}
            />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Confirm password</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder="Confirm password"
              value={passwordMatch}
              onChangeText={(text) => {
                setPasswordMatch(text);
                handleMatch;
              }}
            />
          </View>

          <View style={styles.wrapper}>
            {isMatch ? <Text>Hello</Text> : <Text>World</Text>}

            {/* <CheckBox
              title={isMatch ? "Password match" : "At least 6 characters"}
              checked={isMatch}
              containerStyle={styles.checkboxContainer}
            /> */}
          </View>

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={handleRegistration}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
          <View style={styles.hrContainer}>
            <View style={styles.hrLine} />
            <Text style={styles.hrText}>Or</Text>
            <View style={styles.hrLine} />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={handlePage}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    width: "100%"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold"
  },
  nameWrapper: {
    gap: 10,
    flex: 1
  },
  wrapper: {
    width: "100%",
    gap: 5,
    paddingHorizontal: 10
  },
  inputStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderColor: "darkgray",
    borderRadius: 10,
    borderWidth: 2
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0
  },
  submitBtn: {
    justifyContent: "center",
    backgroundColor: "black",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "80%",
    borderRadius: 10
  },
  submitBtnText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff"
  },
  hrContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  hrLine: {
    height: 2,
    width: "100%",
    flex: 1,
    backgroundColor: "gray"
  },
  hrText: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center"
  },
  loginContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20
  },
  loginText: {
    fontSize: 15,
    color: "gray"
  },
  loginLink: {
    color: "black",
    fontWeight: "bold"
  }
});
