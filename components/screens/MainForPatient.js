import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Ionicons, Fontisto } from "@expo/vector-icons";
import vitamins from "../images/vitamins1.png";
import { createStackNavigator } from "@react-navigation/stack";
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

//import { login_username } from "../Start/Login";
var login_username = "HHH";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <Text style={styles.text}>Welcome back, {login_username}!</Text>
      <Text style={styles.text}>How are you feeling today ?</Text>
    </ImageBackground>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={onPress}
        >
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function NewAppointmentScreen({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={onPress}
        >
          <Text style={styles.text}>New appointment</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function ServicesAndPrices({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={onPress}
        >
          <Text style={styles.text}>Services and Prices</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function ManualTracker({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={onPress}
        >
          <Text style={styles.text}>Manual Tracker</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function MedicalHistory({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={onPress}
        >
          <Text style={styles.text}>Medical history</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function MedicalBlog({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={onPress}
          onPress={() => navigation.navigate("MedicalBlog")}
        >
          <Text style={styles.text}>Medical Blog</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function AboutUs({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={AboutUs}
        >
          <Text style={styles.text}>About us</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function Contact({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
        <Text style={styles.textContact}>Contact:</Text>
        <Text style={styles.smallText}>Phone: +0748800805</Text>
        <Text style={styles.smallText}>
          E-mail address: diananechita1999@gmail.com
        </Text>
        <Text style={styles.smallText}>Fax: diananechita1999@gmail.com</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          //onPress={onPress}
          //onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.text}>Contact</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function MainForPatient({ navigation }) {
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
          name="New appointment"
          component={NewAppointmentScreen}
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
              color: "#2495D4",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainForPatient;

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
