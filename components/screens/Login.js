import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useState, useContext } from "react";
// When user closes the app, we persist value to know if he was logged in or not
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../contexts/AuthProvider";
import Logo from "../elements/Logo";
import Theme from "../theme/Theme";
import Client from "../../api/Client";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

var LoginData = "";

const Login = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const logInUser = async () => {
    setIsLoggedIn(true);
    let token = "PATIENT";
    await AsyncStorage.setItem("@token", token);
    await AsyncStorage.setItem("LoginData", JSON.stringify(LoginData));
  };

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const { show } = useState(false);

  Client.defaults.withCredentials = true;

  const login_now = () => {
    Client.post("/login", { username: userName, password: passWord })
      .then((response) => {
        if (response.data.message) {
          console.log("Login message: ", response.data.message);
          Alert.alert(response.data.message);
        } else {
          LoginData = response.data;
          logInUser();
          Alert.alert(
            "User " + response.data.username + " logged in successfully"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Theme>
      <Logo />
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
    </Theme>
  );
};

export default Login;

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
});
