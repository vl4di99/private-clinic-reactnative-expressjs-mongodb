import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BackgroundStack from "../../../theme/BackgroundStack";

const Stack = createStackNavigator();
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const AboutUs = () => (
  <BackgroundStack>
    <ScrollView style={styles.scrollview}>
      <View style={styles.aboutUs}>
        <Text style={styles.textContact}>
          Are you interested in our services and want to know more about us ?
        </Text>
        <Text style={styles.smallText}>
          We are a big clinic, specialized in treating rare diseases, but we
          offer a variety of services, so everyone can feel safe with us.
        </Text>
        <Text style={styles.smallText}>
          If you are curious about our services, doctors or prices, you can find
          anything in this app.
        </Text>
        <Text style={styles.smallText}>
          You can easily schedule an appointment, using this application, so
          there is no need to spend a lot of time in phone calls for this.
        </Text>
        <Text style={styles.smallText}>
          If you have any problem using this app or you want to report a bug,
          you can send an email to one of the email adresses from the Contact
          menu.
        </Text>
      </View>
    </ScrollView>
  </BackgroundStack>
);

const AboutUsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
};

export default AboutUsStackNavigator;
const styles = StyleSheet.create({
  aboutUs: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: WIDTH / 15,
    marginRight: WIDTH / 15,
    marginTop: HEIGHT / 20,
  },
  scrollview: {
    marginLeft: WIDTH / 35,
    marginRight: WIDTH / 35,
  },
  textContact: {
    textAlign: "center",
    fontSize: 19,
    color: "#618A3D",
    marginTop: HEIGHT / 24,
    marginBottom: HEIGHT / 24,
  },
  smallText: {
    textAlign: "justify",
    fontSize: 18,
    color: "#093923",
  },
});
