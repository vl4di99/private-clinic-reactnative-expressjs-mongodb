import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useState } from "react";
import Logo from "../elements/Logo";
import ThemeDoctor from "../theme/ThemeDoctor";
import Client from "../../api/Client";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const ForgotPasswordDoctor = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [secret, setSecret] = useState("");
  const [show, setShow] = useState(false);

  const forgotPass = () => {
    Client.post("/forgotDoctor", {
      username: userName,
      password: passWord,
      secret: secret,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.message) {
          //console.log("Login message: ", response.data.message);
          Alert.alert(response.data.message);
        } else {
          Alert.alert(
            "User " + `${userName}` + " resetted password successfully"
          );
          navigation.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeDoctor>
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
        label={"New Password"}
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

      <FloatingLabelInput
        label={"Secret"}
        value={secret}
        onChangeText={(value) => setSecret(value)}
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
        onPress={forgotPass}
      >
        <Text style={styles.loginButtonText}>Change Pass</Text>
      </TouchableOpacity>
    </ThemeDoctor>
  );
};

export default ForgotPasswordDoctor;

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
