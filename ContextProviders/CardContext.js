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
  const x = { name: "pixu" };
  return x;
};

function UseCard() {
  const context = useContext(CardContextProvider);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}


export { CardContext, UseCard };
