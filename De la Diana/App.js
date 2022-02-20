import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Account from "./MainPage/Account";
import MainForAdmin from "./MainPage/MainForAdmin";
import MainForDoctor from "./MainPage/MainForDoctor";
import MainForPatient from "./MainPage/MainForPatient";
import Login from "./Start/Login";
import Register from "./Start/Register";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    MainForPatient: MainForPatient,
    MainForDoctor: MainForDoctor,
    Register: Register,
    MainForAdmin: MainForAdmin,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#D9C4EC",
        // height: HEIGHT / 5,
      },
      //headerHEIGHT: 10,
      headerShown: false,
      headerTintColor: "#FFF",
    },
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Navigator>
      <Login />
    </Navigator>
  );
  //return <Register />;
  //return <Login />;
  //return <MainForPatient />;
  //return <MainForDoctor />;
  // return <Account />;
  //return <MainForAdmin />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
