import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import pink from "../images/pink.png";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ThemePatient = ({ children }) => {
  return (
    <ImageBackground source={pink} style={styles.image}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ThemePatient;

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
