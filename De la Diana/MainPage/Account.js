import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Account</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#243640",
    fontSize: 14,
  },
});
