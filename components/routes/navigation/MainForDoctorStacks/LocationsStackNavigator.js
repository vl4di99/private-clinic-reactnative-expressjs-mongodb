import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Locations = () => (
  <ScrollView style={styles.scrollview}>
    <View style={styles.view}>
      <Text style={styles.title}>
        You can find us at the following locations:
      </Text>
      <Text style={styles.subtitle2}>
        34 Observatorului Street, Cluj-Napoca, Romania
      </Text>
      <Text style={styles.subtitle2}>
        26-28 George Baritiu Street, Cluj-Napoca, Romania
      </Text>
      <Text style={styles.subtitle2}>
        71-73 Dorobantilor Street, Cluj-Napoca, Romania
      </Text>
      <Text style={styles.subtitle2}>
        103-105 Muncii Boulevard, Cluj-Napoca, Romania
      </Text>
      <Text style={styles.subtitle2}>
        128-130 21 Decembrie 1989 Boulevard, Cluj-Napoca, Romania
      </Text>
    </View>
  </ScrollView>
);

const LocationsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LocationsScreen" component={Locations} />
    </Stack.Navigator>
  );
};

export default LocationsStackNavigator;
const styles = StyleSheet.create({
  title: {
    marginTop: HEIGHT / 20,
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: WIDTH / 15,
    color: "#734F96",
    marginBottom: WIDTH / 12,
  },
  subtitle: {
    textAlign: "justify",
    fontSize: WIDTH / 22,
    marginTop: HEIGHT / 200,
    color: "#800020",
  },
  subtitle2: {
    textAlign: "center",
    fontSize: WIDTH / 23,
    marginTop: HEIGHT / 30,
    color: "#800020",
  },
  subtitle3: {
    textAlign: "center",
    fontSize: WIDTH / 23,
    marginTop: HEIGHT / 30,
    color: "#800020",
    marginBottom: HEIGHT / 10,
  },
  view: {
    flex: 1,
    marginLeft: WIDTH / 15,
    marginRight: WIDTH / 15,
    marginBottom: HEIGHT / 15,
    alignItems: "center",
  },
  view2: {
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
  },
  scrollview: {
    marginLeft: WIDTH / 35,
    marginRight: WIDTH / 35,
  },
  button: {
    color: "#734F96",
    fontSize: WIDTH / 16,
    borderRadius: WIDTH / 8,
    borderColor: "#734F96",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: WIDTH / 500,
    padding: WIDTH / 100,
    marginTop: HEIGHT / 30,
    marginLeft: WIDTH / 10,
    marginRight: WIDTH / 10,
    marginBottom: HEIGHT / 30,
  },
  text: {
    color: "#800020",
    fontSize: WIDTH / 23,
  },
});
