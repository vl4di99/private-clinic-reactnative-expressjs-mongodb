import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Logo from "../elements/Logo";
import ThemeDoctor from "../theme/ThemeDoctor";
import Client from "../../api/Client";
import { AuthContext } from "../contexts/AuthProvider";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

var DoctorLoginData = "";

const DoctorLogin = ({ navigation }) => {
  const { setDoctorIsLoggedIn } = useContext(AuthContext);

  const logInDoctor = async () => {
    setDoctorIsLoggedIn(true);
    let token = "DOCTOR";
    await AsyncStorage.setItem("@token", token);
    await AsyncStorage.setItem(
      "DoctorLoginData",
      JSON.stringify(DoctorLoginData)
    );
  };

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const { show } = useState(false);

  Client.defaults.withCredentials = true;

  const login_now = () => {
    Client.post("/doctorLogin", { username: userName, password: passWord })
      .then((response) => {
        if (response.data.message) {
          console.log("Login Message: " + response.data.message);
          Alert.alert(response.data.message);
        } else {
          DoctorLoginData = response.data;
          logInDoctor();
          Alert.alert(
            "Doctor " + response.data.username + " logged in successfully"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeDoctor>
      <View style={styles.loginElements}>
        <Logo style={styles.logo} />
        <FloatingLabelInput
          label={"Username"}
          value={userName}
          onChangeText={(value) => setUserName(value)}
          containerStyles={{
            marginBottom: "5%",
            borderColor: "#ABDEE6",
            borderWidth: 3,
            borderRadius: 15,
            height: (HEIGHT * 7) / 100,
            paddingHorizontal: 20,
          }}
          customLabelStyles={{
            colorFocused: "red",
            fontSizeFocused: 12,
          }}
          labelStyles={{
            paddingHorizontal: 5,
          }}
        />

        <FloatingLabelInput
          label={"Password"}
          isPassword
          togglePassword={show}
          value={passWord}
          onChangeText={(value) => setPassWord(value)}
          customShowPasswordComponent={<Text>Show</Text>}
          customHidePasswordComponent={<Text>Hide</Text>}
          containerStyles={{
            marginBottom: "5%",
            borderColor: "#ABDEE6",
            borderWidth: 3,
            borderRadius: 15,
            height: (HEIGHT * 7) / 100,
            paddingHorizontal: 20,
          }}
          customLabelStyles={{
            colorFocused: "red",
            fontSizeFocused: 12,
          }}
          labelStyles={{
            paddingHorizontal: 5,
          }}
        />

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.5}
          onPress={login_now}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ThemeDoctor>
  );
};

export default DoctorLogin;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#2f1a3b",
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 3) / 100,
    width: (WIDTH * 40) / 100,
    height: (HEIGHT * 6) / 100,
    borderColor: "white",
    borderWidth: 3,
  },
  loginButtonText: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.2) / 100,
    fontSize: (HEIGHT * 2) / 100,
    textAlign: "center",
  },
  loginElements: {
    width: "100%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: (HEIGHT * 30) / 100,
  },
});
