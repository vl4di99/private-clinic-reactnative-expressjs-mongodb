import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

const ThemeDoctor = ({ children }) => {
  return (
    <ImageBackground
      source={require("../images/doctorlogin.jpg")}
      style={styles.image}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ThemeDoctor;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
