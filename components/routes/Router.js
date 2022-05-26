import React, { useEffect, useState, useContext, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { styles } from "react-native-floating-label-input/src/styles";

import { AuthStack } from "./AuthStack";
//import {useAuth} from '../contexts/Auth';
import { Loading } from "../elements/Loading";
import { PatientAppStack } from "./PatientAppStack";
import { AuthProvider } from "../contexts/AuthProvider";
import { AuthContext } from "../contexts/AuthProvider";
import Client from "../../api/Client";
import { DoctorAppStack } from "./DoctorAppStack";

export const Router = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { DoctorIsLoggedIn, setDoctorIsLoggedIn } = useContext(AuthContext);

  const [checking, setIsChecking] = useState(true);
  const { getItem } = useAsyncStorage("@token");

  useEffect(() => {
    checkIfIsLoggedIn();
  }, []);

  async function checkIfIsLoggedIn() {
    try {
      let item = await getItem();

      switch (item) {
        case "PATIENT":
          setIsLoggedIn(true);
          break;
        case "DOCTOR":
          setDoctorIsLoggedIn(true);
          break;
      }
    } catch (e) {
      console.log(e);
    }
  }
  /*
  if (checking) {
    return (

    );
  }*/
  /*
  useEffect(() => {
    Client.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(true);
        const contextId = response.data.user.id;
        const contextUsername = loginStatus;
        setAuth({contextId, contextUsername});
        setLoggedIn(response.data.loggedIn);
        console.log("Login Status: ", loginStatus);
        //Alert.alert("User " + loginStatus + " already logged in!");
        //navigation.navigate("MainForPatient");
      }
    });
  }, [] );
  */
  //const {authData, loading} = useAuth();

  //  if (loading) {
  //  return <Loading />;
  //}
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <PatientAppStack />
      ) : DoctorIsLoggedIn ? (
        <DoctorAppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};
