import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { Router } from "./components/routes/Router";
import MainForPatient from "./components/screens/MainForPatient";
import AuthProvider from "./components/contexts/AuthProvider";

export default function App() {
  LogBox.ignoreLogs(
    [
      "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    ],
    ["Animated: `useNativeDriver`"]
  );
  LogBox.ignoreLogs([
    "Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.",
  ]);
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
    //<MainForPatient/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
