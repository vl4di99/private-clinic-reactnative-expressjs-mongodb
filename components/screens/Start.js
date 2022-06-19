import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

import Logo from "../elements/Logo";
import Theme from "../theme/Theme";
import Header from "../elements/Header";
import Paragraph from "../elements/Paragraph";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Start = ({ navigation }) => {
  return (
    <Theme resizeMode="cover">
      <Logo />
      <Header>Private Clinic</Header>
      <Paragraph>Your health starts with us!</Paragraph>
      <TouchableOpacity
        style={styles.loginButton}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.doctorPage}
        onPress={() => navigation.navigate("DoctorLogin")}
      >
        <Text style={styles.doctorText}>ARE YOU A MD?</Text>
      </TouchableOpacity>
    </Theme>
  );
};

export default Start;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#2f1a3b",
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 3) / 100,
    width: (WIDTH * 50) / 100,
    height: (HEIGHT * 6) / 100,
    borderColor: "white",
    borderWidth: 3,
  },
  loginButtonText: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.1) / 100,
    fontSize: (HEIGHT * 2.2) / 100,
    textAlign: "center",
  },
  registerButton: {
    backgroundColor: "#2F1A3B",
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 3) / 100,
    width: (WIDTH * 50) / 100,
    height: (HEIGHT * 6) / 100,
    borderColor: "white",
    borderWidth: 3,
  },
  registerButtonText: {
    color: "#EEEEEE",
    paddingVertical: (HEIGHT * 1.1) / 100,
    fontSize: (HEIGHT * 2.2) / 100,
    textAlign: "center",
  },
  doctorPage: {
    backgroundColor: "#00B4AB",
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 8) / 100,
    width: (WIDTH * 40) / 100,
    height: (HEIGHT * 5) / 100,
    borderColor: "#00504C",
    borderWidth: 3,
  },
  doctorText: {
    color: "#CDFFFD",
    paddingVertical: (HEIGHT * 0.9) / 100,
    fontSize: (HEIGHT * 1.7) / 100,
    textAlign: "center",
    justifyContent: "center",
  },
});
