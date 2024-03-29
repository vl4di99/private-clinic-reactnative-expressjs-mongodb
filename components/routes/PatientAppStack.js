import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  AntDesign,
  Ionicons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";

import LocationsStackNavigator from "./navigation/MainForPatientStacks/LocationsStackNavigator";
import ServicesPricesStackNavigator from "./navigation/MainForPatientStacks/ServicesPricesStackNavigator";
import BottomTabNavigator from "./PatientBottomTabNavigator";
import AboutUsStackNavigator from "./navigation/MainForPatientStacks/AboutUsStackNavigator";
import MedicalHistoryStackNavigator from "./navigation/MainForPatientStacks/MedicalHistoryStackNavigator";
import ContactStackNavigator from "./navigation/MainForPatientStacks/ContactStackNavigator";
import TermsAndConditionsStackNavigator from "./navigation/MainForPatientStacks/TermsAndConditionsStackNavigator";
import ManualTrackerStackNavigator from "./navigation/MainForPatientStacks/ManualTrackerStackNavigator";
import ManualTrackerHistoryStackNavigator from "./navigation/MainForPatientStacks/ManualTrackerHistoryStackNavigator";
import ViewAppointmentsStackNavigator from "./navigation/MainForPatientStacks/ViewAppointments";
import DoctorWorkingHoursStackNavigator from "./navigation/MainForPatientStacks/DoctorWorkingHours";

const Drawer = createDrawerNavigator();

export const PatientAppStack = () => {
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
        name="Doctor Schedule"
        component={DoctorWorkingHoursStackNavigator}
        options={{
          drawerIcon: (config) => (
            <MaterialIcons size={20} name={"schedule"} color="#2495D4" />
          ),
          drawerLabelStyle: {
            fontSize: 14,
            color: "#2495D4",
          },
        }}
      />
      <Drawer.Screen
        name="Medical History"
        component={MedicalHistoryStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Fontisto size={18} name={"stethoscope"} color="#F33A6A"></Fontisto>
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
            <MaterialIcons size={18} name={"track-changes"} color="#2495D4" />
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
            <MaterialIcons size={18} name={"history"} color="#F33A6A" />
          ),
          drawerLabelStyle: {
            fontSize: 14,
            color: "#F33A6A",
          },
        }}
      />
      <Drawer.Screen
        name="View Appointments"
        component={ViewAppointmentsStackNavigator}
        options={{
          drawerIcon: (config) => (
            <Ionicons size={18} name={"calendar"} color="#2495D4" />
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
