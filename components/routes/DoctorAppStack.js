import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";

import HomeStackNavigator from "./navigation/MainForPatientStacks/HomeStackNavigatior";
import LocationsStackNavigator from "./navigation/MainForDoctorStacks/LocationsStackNavigator";
import ServicesPricesStackNavigator from "./navigation/MainForDoctorStacks/ServicesPricesStackNavigator";
import ManualTrackerStackNavigator from "./navigation/MainForDoctorStacks/ManualTrackerStackNavigator";
import BlogStackNavigator from "./navigation/MainForDoctorStacks/BlogStackNavigator";
import AboutUsStackNavigator from "./navigation/MainForDoctorStacks/AboutUsStackNavigator";
import ContactStackNavigator from "./navigation/MainForDoctorStacks/ContactStackNavigator";
import BottomTabNavigator from "./PatientBottomTabNavigator";

const Drawer = createDrawerNavigator();

export const DoctorAppStack = () => {
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
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen
        name="LocationsStack"
        component={LocationsStackNavigator}
      />
      <Drawer.Screen
        name="ManualTrackerStack"
        component={ManualTrackerStackNavigator}
      />
      <Drawer.Screen name="BlogStack" component={BlogStackNavigator} />
      <Drawer.Screen
        name="ServicesPricesStack"
        component={ServicesPricesStackNavigator}
      />
      <Drawer.Screen name="AboutUsStack" component={AboutUsStackNavigator} />
      <Drawer.Screen name="ContactStack" component={ContactStackNavigator} />
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
