import * as React from "react";
import { Text, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BlogStackNavigator from "./navigation/MainForPatientStacks/BlogStackNavigator";
import NewAppointmentStackNavigator from "./navigation/MainForPatientStacks/NewAppointmentStackNavigator";
import ProfileStackNavigator from "./navigation/MainForPatientStacks/ProfileStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="BlogStack"
      screenOptions={{
        showLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 25,
          height: 55,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="BlogStack"
        component={BlogStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="blog"
              size={25}
              color={focused ? "#551E18" : "#000"}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Blog</Text>,
        }}
      />

      <Tab.Screen
        name="NewAppointmentStack"
        component={NewAppointmentStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="plus"
              size={40}
              style={{
                position: "absolute",
                bottom: 5,
              }}
              color={focused ? "#551E18" : "#000"}
            />
          ),
          tabBarLabel: () => (
            <Text style={styles.tabBarLabel}>Appointment</Text>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={25}
              color={focused ? "#551E18" : "#000"}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Profile</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
