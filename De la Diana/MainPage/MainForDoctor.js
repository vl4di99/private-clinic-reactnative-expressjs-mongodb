import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Ionicons, Fontisto } from "@expo/vector-icons";
import vitamins from "./vitamins.png";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Drawer = createDrawerNavigator();
const onPress = { onPress };

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Welcome</Text>
      <ImageBackground source={vitamins} style={styles.image} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function MyAppointmentsScreen({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>My appointments</Text>
      </TouchableOpacity>
    </View>
  );
}

function Contact({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}
function AboutUs({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>About us</Text>
      </TouchableOpacity>
    </View>
  );
}
function MedicalHistory({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>Medical history</Text>
      </TouchableOpacity>
    </View>
  );
}

function ServicesAndPrices({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>Services and Prices</Text>
      </TouchableOpacity>
    </View>
  );
}

function MedicalBlog({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>Medical Blog</Text>
      </TouchableOpacity>
    </View>
  );
}

function ManualTracker({ navigation }) {
  return (
    <View style={styles.profile}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={styles.text}>Manual Tracker</Text>
      </TouchableOpacity>
    </View>
  );
}

//const MainForPatient=React.createClass({

function MainForDoctor() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 10 },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: (config) => (
              <AntDesign size={18} name={"home"} color="#2495D4"></AntDesign>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#2495D4",
            },
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: (config) => (
              <AntDesign size={18} name={"user"} color="#F33A6A"></AntDesign>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#F33A6A",
            },
          }}
        />
        <Drawer.Screen
          name="My appointments"
          component={MyAppointmentsScreen}
          options={{
            drawerIcon: (config) => (
              <AntDesign
                size={18}
                name={"calendar"}
                color="#2495D4"
              ></AntDesign>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#2495D4",
            },
          }}
        />
        <Drawer.Screen
          name="Services and prices"
          component={ServicesAndPrices}
          options={{
            drawerIcon: (config) => (
              <AntDesign
                size={18}
                name={"creditcard"}
                color="#F33A6A"
              ></AntDesign>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#F33A6A",
            },
          }}
        />
        <Drawer.Screen
          name="Manual tracker"
          component={ManualTracker}
          options={{
            drawerIcon: (config) => (
              <AntDesign size={18} name={"hearto"} color="#2495D4"></AntDesign>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#2495D4",
            },
          }}
        />

        <Drawer.Screen
          name=" Medical history"
          component={MedicalHistory}
          options={{
            drawerIcon: (config) => (
              <Fontisto
                size={18}
                name={"stethoscope"}
                color="#F33A6A"
              ></Fontisto>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#F33A6A",
            },
          }}
        />
        <Drawer.Screen
          name="Medical blog"
          component={MedicalBlog}
          options={{
            drawerIcon: (config) => (
              <Ionicons
                size={18}
                name={"reader-outline"}
                color="#2495D4"
              ></Ionicons>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#2495D4",
            },
          }}
        />
        <Drawer.Screen
          name="About us"
          component={AboutUs}
          options={{
            drawerIcon: (config) => (
              <Ionicons
                size={18}
                name={"information"}
                color="#F33A6A"
              ></Ionicons>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "#F33A6A",
            },
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: (config) => (
              <Ionicons
                size={18}
                name={"call-outline"}
                color="#2495D4"
              ></Ionicons>
            ),
            drawerLabelStyle: {
              fontSize: 14,
              color: "",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainForDoctor;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#D9C4EC",
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
    color: "#2495D4",
    marginTop: HEIGHT / 15,
  },
  image: {
    marginLeft: WIDTH / 3.8,
    marginRight: WIDTH / 3.8,
    marginTop: HEIGHT / 12,
    width: WIDTH / 2,
    height: HEIGHT / 2,
  },
});
