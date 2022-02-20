import React, { Component } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContact}>About us:</Text>
      <Text style={styles.smallText}>
        We are a big clinic, specialized in treating rare diseases, but we offer
        a variety of services, so everyone can feel safe with us.
      </Text>
      <Text style={styles.smallText}>
        If you are curious about our services, doctors or prices, you can find
        anything in this app.
      </Text>
      <Text style={styles.smallText}>Fax: diananechita1999@gmail.com</Text>
    </View>
  );
};

export default AboutUs;

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
