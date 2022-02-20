import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from "react-native";

import "react-native-gesture-handler";
import { createAppContainer, NavigationActions } from "react-navigation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useNavigate } from "react-router-dom";
import { createStackNavigator } from "react-navigation-stack";
import Client from "../api/Client";

import MainForAdmin from "../MainPage/MainForAdmin";
import MainForDoctor from "../MainPage/MainForDoctor";
import pink from "../assets/pink.png";

import { NetworkInfo } from "react-native-network-info";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");
var login_username = "";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  Client.defaults.withCredentials = true;
  useEffect(() => {
    Client.get("/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoggedIn(response.data.loggedIn);
        setLoginStatus(response.data.user[0].username);
        console.log(loginStatus);
        Alert.alert("User " + loginStatus + "already logged in!");
        props.navigation.navigate("MainForPatient");
      }
    });
  }, []);

  const login_now = () => {
    // var IPFrontend = NetworkInfo.getIPV4Address();
    //  console.log(IPFrontend);
    if (loggedIn) {
      props.navigation.navigate("MainForPatient");
    } else {
      Client.post("/login", { username: userName, password: passWord })
        .then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
            console.log(setLoginStatus(response.data.message));
            Alert.alert(response.data.message);
          } else {
            setLoginStatus(response.data[0].username);
            console.log(setLoginStatus(response.data[0].username));
            Alert.alert(
              "User " + response.data[0].username + " logged in successfully"
            );
            login_username = response.data[0].username;
            props.navigation.navigate("MainForPatient");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={pink} style={styles.image}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <TextInput
          style={styles.LoginText}
          //onChangeText={(userName) => setUserName(userName)}
          //onChangeText={setUserName}
          onChangeText={(user) => setUserName(user)}
          placeholder="Enter your username"
        />
        <TextInput
          style={styles.LoginText}
          //onChangeText={(password) => setPassword(password)}
          //onChangeText={setPassword}
          onChangeText={(pass) => setPassWord(pass)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.5}
          //onPress={() => props.navigation.navigate("MainForPatient")}
          //onPress={onChangeHandler}
          //onPress={login_now}
          onPress={login_now}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.newAccount}>Don't have an account yet?</Text>
        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;
export { login_username };

const StackNavigator = createStackNavigator(
  //Creating a stack StackNavigator to NEST the tab navigator in it so it can be Nested inside the drawer Navigator

  {
    defaultNavigationOptions: ({ navigation }) => {
      //Default navigationOptions
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: "#283593",
          borderWidth: 1,
          borderBottomColor: "#cfdef7",
        },
      };
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0ccd0",
    alignItems: "center",
  },
  newAccount: {
    marginTop: (HEIGHT * 20) / 100,
    fontSize: (HEIGHT * 2) / 100,
    textAlign: "center",
  },
  welcomeText: {
    justifyContent: "center",
    fontSize: (HEIGHT * 5) / 100,
    color: "#231a3b",
    width: (WIDTH * 80) / 100,
    height: (HEIGHT * 12) / 100,
    textAlign: "center",
    fontWeight: "bold",
  },
  LoginText: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: (HEIGHT * 1.1) / 100,
  },
  loginButton: {
    backgroundColor: "#2f1a3b",
    height: (HEIGHT * 4) / 100,
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 3) / 100,
    width: (WIDTH * 40) / 100,
    height: (HEIGHT * 6) / 100,
  },
  loginButtonText: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.1) / 100,
    fontSize: (HEIGHT * 2.5) / 100,
    textAlign: "center",
  },
  registerButton: {
    backgroundColor: "#2f1a3b",
    height: (HEIGHT * 4) / 100,
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: HEIGHT / 100,
    width: (WIDTH * 30) / 100,
    height: (HEIGHT * 5) / 100,
    justifyContent: "center",
  },
  registerButtonText: {
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
