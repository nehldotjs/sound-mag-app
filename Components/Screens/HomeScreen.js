import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// FIREBASE IMPORTS
import { FIREBASE_AUTH, db } from "../../firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";

// FIREBASE IMPORTS

// CONTEXTS IMPORTS
import { useFirebaseContext } from "../../ContextProviders/FirebaseAuth";
// CONTEXTS IMPORTS

const HomeScreen = () => {
  const [userInformation, setUserInformation] = useState([]);
  const { onAuthState, setAuthState, userId } = useFirebaseContext();

  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  const screenWidth = Dimensions.get("window").width; // Move screenWidth here

  const userInfoRef = collection(db, "userInfo");

  console.log(userId);
  const handleSignOut = async () => {
    auth.signOut().then(() => {
      try {
        if (onAuthState) {
          setAuthState(false);
        }
      } catch (err) {
        return err;
      }
    });
  };
  const getUserInfo = async () => {
    try {
      const data = await getDocs(userInfoRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setUserInformation(filteredData);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false
  //   });

  //   getUserInfo();
  // }, []);

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center"
        },
        { width: screenWidth }
      ]}>
      {userInformation.map((item, index) => (
        <View key={index}>
          <Text>{item.job}</Text>
        </View>
      ))}
      <Text>Hello World {auth?.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: "orangered",
    marginTop: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
    color: "blue"
  }
});
