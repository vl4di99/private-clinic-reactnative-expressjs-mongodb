/*import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Private Clinic</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}*/
import React from "react";
import {Text, Button, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

import Logo from "../elements/Logo";
import Theme from "../theme/Theme";
import Header from "../elements/Header";
import Paragraph from "../elements/Paragraph";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Start = ({navigation}) => {
    return(
      <Theme resizeMode="cover">
        <Logo/>
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
        <TouchableOpacity style={styles.doctorPage} onPress={() => navigation.navigate("DoctorLogin")}>
          <Text style={styles.doctorText}>DOCTOR?</Text>
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
    marginTop: HEIGHT * 3 / 100,
    width: (WIDTH * 50) / 100,
    height: (HEIGHT * 6) / 100,
    borderColor: "white",
    borderWidth: 3
  },
  registerButtonText: {
    color: "#EEEEEE",
    paddingVertical: (HEIGHT * 1.1) / 100,
    fontSize: (HEIGHT * 2.2) / 100,
    textAlign: "center",
  },
  doctorPage: {
    backgroundColor: "#00B4AB",
    position: "absolute",
    borderRadius: (HEIGHT * 3) / 100,
    top: HEIGHT/1.16,
    right: WIDTH / 4,
    width: (WIDTH * 30) / 100,
    height: (HEIGHT * 4.5) / 100,
    borderColor: "#00504C",
    borderWidth: 3
  },
  doctorText: {
    color: "#CDFFFD",
    paddingVertical: (HEIGHT * 0.9) / 100,
    fontSize: (HEIGHT * 1.7) / 100,
    textAlign: "center",
  }
})
