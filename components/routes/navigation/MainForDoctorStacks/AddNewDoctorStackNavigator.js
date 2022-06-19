import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Logo from "../../../elements/Logo";
import Theme from "../../../theme/Theme";
import Client from "../../../../api/Client";
import { FloatingLabelInput } from "react-native-floating-label-input";

const Stack = createStackNavigator();
const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const AddNewDoctor = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confPassWord, setConfPassWord] = useState("");
  const [secret, setSecret] = useState("");
  const [department, setDepartment] = useState("");
  const [start_work_hour, setStart_work_hour] = useState("");
  const [end_work_hour, setEnd_work_hour] = useState("");
  const [show, setShow] = useState(false);

  const register_now = () => {
    if (passWord != confPassWord) {
      Alert.alert("Passwords don't match!");
    } else {
      Client.post("/doctorRegister", {
        username: userName,
        password: passWord,
        fullname: fullName,
        department: department,
        start_work_hour: start_work_hour,
        end_work_hour: end_work_hour,
        secret: secret,
      })
        .then((response) => {
          if (response.data === false) {
            Alert.alert("User already exists!");
          } else {
            Alert.alert("Account created! You can now login!");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Theme>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{
          flexGrow: 0.05,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          label={"Full Name"}
          value={fullName}
          onChangeText={(value) => setFullName(value)}
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
          label={"Department"}
          value={department}
          onChangeText={(value) => setDepartment(value)}
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
          label={"Start Working Hour (Ex: 9:00)"}
          value={start_work_hour}
          onChangeText={(value) => setStart_work_hour(value)}
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
          label={"End Working Hour (Ex: 15:00)"}
          value={end_work_hour}
          onChangeText={(value) => setEnd_work_hour(value)}
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

        <FloatingLabelInput
          label={"Confirm Password"}
          isPassword
          togglePassword={show}
          value={confPassWord}
          onChangeText={(value) => setConfPassWord(value)}
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
          label={"Secret (Used If Forgot Password)"}
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
          onPress={register_now}
        >
          <Text style={styles.loginButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </ScrollView>
    </Theme>
  );
};

const AddNewDoctorStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddNewDoctor" component={AddNewDoctor} />
    </Stack.Navigator>
  );
};

export default AddNewDoctorStackNavigator;

const styles = StyleSheet.create({
  scrollview: {
    width: "100%",
  },
  textContact: {
    textAlign: "left",
    fontSize: 19,
    color: "#618A3D",
    marginTop: HEIGHT / 24,
    marginBottom: HEIGHT / 24,
  },
  smallText: {
    textAlign: "left",
    fontSize: 18,
    color: "#093923",
  },
  loginButton: {
    backgroundColor: "#2f1a3b",
    alignItems: "center",
    borderRadius: (HEIGHT * 3) / 100,
    marginTop: (HEIGHT * 1) / 100,
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
