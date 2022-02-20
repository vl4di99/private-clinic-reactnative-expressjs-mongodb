import React, { Component } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
/*
const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContact}>Contact:</Text>
      <Text style={styles.smallText}>Phone: +0748800805</Text>
      <Text style={styles.smallText}>
        E-mail address: diananechita1999@gmail.com
      </Text>
      <Text style={styles.smallText}>Fax: diananechita1999@gmail.com</Text>
    </View>
  );
};*/

function Contact({ navigation }) {
  return (
    <ImageBackground source={vitamins} style={styles.image}>
      <View style={styles.profile}>
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

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContact: {
    fontSize: 18,
    color: "#89cff0",
  },
  smallText: {
    color: "#89cff0",
    fontSize: 14,
  },
});
