import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import healthBackground6 from "../images/healthBackground6.png";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalBackground = ({ children }) => {
  return (
    <ImageBackground source={healthBackground6} style={styles.image}>
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
