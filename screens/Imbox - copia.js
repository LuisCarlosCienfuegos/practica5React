
import React from "react";
import { View, Text } from "react-native";

const Seleccionar = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F08A5C",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ fontSize: 42, fontWeight: "bold" }}>Seleccionar</Text>
    </View>
  );
};

export default Seleccionar;