import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UseCard } from "../../ContextProviders/CardContext";
import { FIREBASE_AUTH } from "../../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("Login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return (
    <View>
      <Text>Hello world </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 40,
    color: "blue"
  }
});
