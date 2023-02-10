import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Seleccionar from "../screens/Imbox";
import Abrir from "../screens/Abrir";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#000",
        activeBackgroundColor: "#5835c4",
        inactiveTintColor: "#FFF",
        inactiveBackgroundColor: "#f20707"
      }}
    
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Seleccionar"
        component={Seleccionar}
        options={{
          title: "Seleccionar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Abrir"
        component={Abrir}
        options={{
          title: "Abrir",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;