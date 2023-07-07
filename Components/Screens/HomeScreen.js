import { View, Text } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { UseCard } from "../../ContextProviders/CardContext";

const HomeScreen = () => {
  const { name } = UseCard();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return (
    <View>
      <Text>west side!!!!!!!!!!! {name}</Text>
    </View>
  );
};

export default HomeScreen;
