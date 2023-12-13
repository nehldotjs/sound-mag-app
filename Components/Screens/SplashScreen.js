import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import bckGrndImg from "../../assets/images/pexels-tobi-loke-4334212.jpg";

const SplashScreen = () => {
  const windowsHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const getStarted = () => {
    navigation.navigate("LoginModal");
  };

  return (
    <>
      <View style={[styles.container, { height: windowsHeight }]}>
        <View style={[styles.wrapper, { height: windowsHeight }]}>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 10
              // flex: 1
            }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
              <Text
                style={{
                  fontSize: 65,
                  fontWeight: "bold",
                  color: "#5EC5D4",
                  stroke: 30
                }}>
                NEW{" "}
              </Text>
              <AntDesign
                name="arrowright"
                size={44}
                color="white"
                style={{ width: "100%" }}
              />
            </View>
            <Text
              style={{
                fontSize: 65,
                fontWeight: "bold",
                right: 0,
                textAlign: "right",
                color: "#5EC5D4"
              }}>
              ARRIVALS
            </Text>
            <Text
              style={{ fontSize: 65, fontWeight: "bold", color: "#5EC5D4" }}>
              TODAY
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10
            }}>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={getStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: windowsHeight,
            width: "100%",
            position: "absolute",
            flex: 1,
            bottom: 0,
            zIndex: -1
          }}>
          <Image source={bckGrndImg} style={styles.bckgrndImageStyle} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    justifyContent: "flex-end",
    flexDirection: "column",
    bottom: 40,
    paddingHorizontal: 20
  },
  getStartedButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d2d2d",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20
  },
  bckgrndImageStyle: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default SplashScreen;
