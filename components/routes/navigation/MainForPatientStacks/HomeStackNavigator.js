import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import vitamins from "../../../images/vitamins1.png";
import BackgroundStack from "../../../theme/BackgroundStack";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Stack = createStackNavigator();

const Home = () => (
  <ImageBackground source={vitamins} style={styles.image}>
    <Text style={styles.text}>Welcome back!</Text>
    <Text style={styles.text}>How are you feeling today ?</Text>
  </ImageBackground>
);

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 29,
    color: "#F33A6A",
    fontWeight: "bold",
    marginTop: HEIGHT / 15,
  },
  image: {
    // marginLeft: WIDTH / 3.8,
    // marginRight: WIDTH / 3.8,
    // marginTop: HEIGHT / 12,
    width: WIDTH,
    height: HEIGHT,
    //opacity: 0.1,
  },
});
