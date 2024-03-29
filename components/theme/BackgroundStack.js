import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import healthBackground7 from "../images/healthBackground7.jpg";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const BackgroundStack = ({ children }) => {
  return (
    <ImageBackground source={healthBackground7} style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundStack;

const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: HEIGHT,
    resizeMode: "cover",
    flex: 1,
  },
});
