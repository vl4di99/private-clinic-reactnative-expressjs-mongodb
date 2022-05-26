import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign, Ionicons, Fontisto } from "@expo/vector-icons";

import HomeStackNavigator from "./navigation/MainForPatientStacks/HomeStackNavigatior";
import LocationsStackNavigator from "./navigation/MainForDoctorStacks/LocationsStackNavigator";
import ServicesPricesStackNavigator from "./navigation/MainForDoctorStacks/ServicesPricesStackNavigator";
import ManualTrackerStackNavigator from "./navigation/MainForDoctorStacks/ManualTrackerStackNavigator";
import BlogStackNavigator from "./navigation/MainForDoctorStacks/BlogStackNavigator";
import CreateBlogPostStackNavigator from "./navigation/MainForDoctorStacks/CreateBlogPostStackNavigator";
import AboutUsStackNavigator from "./navigation/MainForDoctorStacks/AboutUsStackNavigator";
import ContactStackNavigator from "./navigation/MainForDoctorStacks/ContactStackNavigator";
import RegisterNewDoctorNavigator from "./navigation/MainForDoctorStacks/RegisterNewDoctorNavigator";
import TermsAndConditionsStackNavigator from "./navigation/MainForDoctorStacks/TermsAndConditionsStackNavigator";
import AddNewDoctorStackNavigator from "./navigation/MainForDoctorStacks/AddNewDoctorStackNavigator";
import DoctorBottomTabNavigator from "./DoctorBottomTabNavigator";
import ViewAppointmentsStackNavigator from "./navigation/MainForDoctorStacks/ViewAppointments";
import WritePatientHistoryStackNavigator from "./navigation/MainForDoctorStacks/WritePatientHistoryStackNavigator";
import ManualTrackerHistoryStackNavigator from "./navigation/MainForDoctorStacks/ManualTrackerHistoryStackNavigator";

const Drawer = createDrawerNavigator();

export const DoctorAppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#FFDBCC",
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={DoctorBottomTabNavigator}
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
        name="Manual Tracker"
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
        name="Create Blog Post"
        component={CreateBlogPostStackNavigator}
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
        name="Write Patient History"
        component={WritePatientHistoryStackNavigator}
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
        name="Manual Tracker History"
        component={ManualTrackerHistoryStackNavigator}
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
        name="Add New Doctor"
        component={AddNewDoctorStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              size={18}
              name={"person-add-outline"}
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
        name="Contact Stack"
        component={ContactStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Ionicons
              size={18}
              color="#2495D4"
              name={"call-outline"}
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
