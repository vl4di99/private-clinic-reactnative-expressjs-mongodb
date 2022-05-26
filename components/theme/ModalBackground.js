import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  View,
} from "react-native";
import healthBackground6 from "../images/healthBackground6.png";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalBackground = ({ children }) => {
  return (
    <ImageBackground
      //source={require("../images/phoneLicentaVitamins.png")}
      source={healthBackground6}
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
};

export default ModalBackground;

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: HEIGHT,
    resizeMode: "cover",
    flex: 1,
  },
});
