import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";
const CardContextProvider = createContext();
const CardContext = ({ children }) => {
  return (
    <>
      <CardContextProvider.Provider value={CardValues()}>
        {children}
      </CardContextProvider.Provider>
    </>
  );
};

const CardValues = () => {
  const value = { name: "pixu" };
};

export { CardContext };
