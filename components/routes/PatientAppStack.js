import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign, Ionicons, Fontisto } from "@expo/vector-icons";

import vitamins1 from "../../components/images/vitamins1.png";
import HomeStackNavigator from "./navigation/MainForPatientStacks/HomeStackNavigatior";
import LocationsStackNavigator from "./navigation/MainForPatientStacks/LocationsStackNavigator";
import ServicesPricesStackNavigator from "./navigation/MainForPatientStacks/ServicesPricesStackNavigator";
import BottomTabNavigator from "./PatientBottomTabNavigator";
import AboutUsStackNavigator from "./navigation/MainForPatientStacks/AboutUsStackNavigator";
import MedicalHistoryStackNavigator from "./navigation/MainForPatientStacks/MedicalHistoryStackNavigator";
import MedicalBlogStackNavigator from "./navigation/MainForPatientStacks/MedicalBlogStackNavigator";
import ContactStackNavigator from "./navigation/MainForPatientStacks/ContactStackNavigator";
import TermsAndConditionsStackNavigator from "./navigation/MainForPatientStacks/TermsAndConditionsStackNavigator";
import ManualTrackerStackNavigator from "./navigation/MainForPatientStacks/ManualTrackerStackNavigator";

const Drawer = createDrawerNavigator();

export const PatientAppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#551E18",
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
          >
            <Icon name="bars" size={25} color="#fff" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: (config) => (
            <AntDesign size={18} name={"home"} color="#F33A6A"></AntDesign>
          ),
          drawerLabelStyle: {
            fontSize: 14,
            color: "#F33A6A",
          },
        }}
      />
      <Drawer.Screen
        name="Locations"
        component={LocationsStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              size={18}
              name="location-outline"
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
        name="Services and Prices"
        component={ServicesPricesStackNavigator}
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
        name="Medical History"
        component={MedicalHistoryStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Fontisto size={18} name={"stethoscope"} color="#2495D4"></Fontisto>
          ),
          drawerLabelStyle: {
            fontSize: 14,
            color: "#2495D4",
          },
        }}
      />

      <Drawer.Screen
        name="Medical Blog"
        component={MedicalBlogStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              size={18}
              name={"reader-outline"}
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
        name="Manual tracker"
        component={ManualTrackerStackNavigator}
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
        name="About Us"
        component={AboutUsStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Ionicons size={18} name={"information"} color="#F33A6A"></Ionicons>
          ),
          drawerLabelStyle: {
            fontSize: 14,
            color: "#F33A6A",
          },
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactStackNavigator}
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
      <Drawer.Screen
        name="Terms and Conditions"
        component={TermsAndConditionsStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              size={18}
              name={"bookmark-outline"}
              color="#F33A6A"
            ></Ionicons>
          ),
          drawerLabelStyle: {
            fontSize: 14,
            color: "#F33A6A",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
