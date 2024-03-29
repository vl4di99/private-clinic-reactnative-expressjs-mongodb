import React from "react";
import { StyleSheet, LogBox } from "react-native";
import { Router } from "./components/routes/Router";
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
  LogBox.ignoreLogs([
    "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  ]);
  //LogBox.ignoreAllLogs();
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
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
