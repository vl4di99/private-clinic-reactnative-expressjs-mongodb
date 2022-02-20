import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Ionicons, Fontisto } from "@expo/vector-icons";
import vitamins from "./vitamins1.png";
import { createStackNavigator } from "react-navigation-stack";
//import { Contact as ContactImp } from "../Drawers/Contact";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Drawer = createDrawerNavigator();
//const onPress = { onPress };
//const pink = "#F33A6A";

function MedicalBlog({ navigation }) {
  return <Text>Medical Bloggg</Text>;
}

export default MedicalBlog;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "#D9C4EC",
    alignItems: "center",
  },
  button: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.1) / 100,
    fontSize: (HEIGHT * 2.5) / 100,
    textAlign: "center",
  },
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
  textContact: {
    fontSize: 18,
    color: "#89cff0",
  },
  smallText: {
    color: "#000000",
    fontSize: 14,
  },
});
