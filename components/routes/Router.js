import React, { useEffect, useState, useContext, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { AuthStack } from "./AuthStack";
import { PatientAppStack } from "./PatientAppStack";
import { AuthContext } from "../contexts/AuthProvider";
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
