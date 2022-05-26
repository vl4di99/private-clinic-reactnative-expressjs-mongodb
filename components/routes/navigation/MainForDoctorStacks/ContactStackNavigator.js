import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BackgroundStack from "../../../theme/BackgroundStack";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
const Stack = createStackNavigator();

const Contact = () => (
  <BackgroundStack>
    <View style={style.contact}>
      <Text style={style.texts}>Phone:</Text>
      <Text style={style.texts2}>+40748800805 </Text>
      <Text style={style.texts2}>0364800800</Text>
      <Text style={style.texts}>E-mail adresses:</Text>
      <Text style={style.texts2}>diananechita1999@gmail.com</Text>
      <Text style={style.texts2}>appinfo@gmail.com</Text>
      <Text style={style.texts}>Fax:</Text>
      <Text style={style.texts2}>diananechita1999@gmail.com</Text>
    </View>
  </BackgroundStack>
);

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ContactScreen" component={Contact} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
const style = StyleSheet.create({
  contact: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: WIDTH / 15,
    marginRight: WIDTH / 15,
    marginTop: HEIGHT / 20,
  },
  texts: {
    textAlign: "left",
    fontSize: WIDTH * 0.06,
    color: "#618A3D",
    marginTop: HEIGHT / 24,
  },
  texts2: {
    textAlign: "left",
    fontSize: WIDTH * 0.045,
    color: "#093923",
  },
});
