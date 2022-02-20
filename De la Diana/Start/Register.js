import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import axios from "axios";
import Client from "../api/Client";

import pink from "../assets/pink.png";
import { createStackNavigator } from "react-navigation-stack";
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Register = (props) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confPassword, setConfPassword] = useState("");
  // const onPress = { onPress };

  const register_now = () => {
    if (passWord != confPassword) {
      Alert.alert("Passwords don't match!");
    } else {
      Client.post("/register", {
        username: userName,
        password: passWord,
      }).then((response) => {
        Alert("Account created! You can now login!");
        props.navigation.goBack();
        //props.navigation.navigate(Login);
        //MainForPatient();
        console.log(response);
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={pink} style={styles.image}>
        <Text style={styles.welcomeText}>Welcome !</Text>
        <Text style={styles.setUserAndPass}>
          Set a username and a password :)
        </Text>

        <TextInput
          style={styles.RegisterText}
          //onChangeText={(userName) => setUserName(userName)}
          //onChange={(value) => this.set({ [this]: value })}
          onChangeText={(user) => {
            setUserName(user);
          }}
          placeholder="Enter a username"
        />
        <TextInput
          style={styles.RegisterText}
          //onChangeText={(password) => setPassword(password)}
          //onChange={(value) => this.setPassword({ [this]: value })}
          placeholder="Enter a password"
          onChangeText={(pass) => {
            setPassWord(pass);
          }}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.RegisterText}
          placeholder="Confirm the password"
          onChangeText={(passc) => {
            setConfPassword(passc);
          }}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.5}
          //onPress={() => props.navigation.navigate("MainForPatient")}
          onPress={register_now}
        >
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>

        <Text style={styles.existingAccount}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0ccd0",
    alignItems: "center",
  },
  existingAccount: {
    marginTop: (HEIGHT * 10) / 100,
    fontSize: (HEIGHT * 2) / 100,
    textAlign: "center",
  },
  welcomeText: {
    justifyContent: "center",
    fontSize: (HEIGHT * 5) / 100,
    color: "#231a3b",
    width: (WIDTH * 50) / 100,
    height: (HEIGHT * 10) / 100,
    textAlign: "center",
  },
  setUserAndPass: {
    justifyContent: "center",
    fontSize: (HEIGHT * 3) / 100,
    color: "#231a3b",
    width: (WIDTH * 70) / 100,
    height: (HEIGHT * 10) / 100,
    textAlign: "center",
  },
  RegisterText: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: (HEIGHT * 2) / 100,
  },
  registerButton: {
    backgroundColor: "#2f1a3b",
    height: (HEIGHT * 4) / 100,
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 4) / 100,
    width: (WIDTH * 40) / 100,
    height: (HEIGHT * 6) / 100,
  },
  registerButtonText: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.1) / 100,
    fontSize: (HEIGHT * 2.5) / 100,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#2f1a3b",
    height: (HEIGHT * 4) / 100,
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: HEIGHT / 100,
    width: (WIDTH * 30) / 100,
    height: (HEIGHT * 5) / 100,
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    paddingVertical: HEIGHT / 100,
    fontSize: (HEIGHT * 1.8) / 100,
    textAlign: "center",
  },
  image: {
    //marginLeft: WIDTH ,
    // marginRight: WIDTH / 3.8,
    //marginTop: HEIGHT / 12,
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
