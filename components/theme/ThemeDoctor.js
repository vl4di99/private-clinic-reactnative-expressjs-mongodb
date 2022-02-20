import { ImageBackground, StyleSheet, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import pink from '../images/pink.png';

const WIDTH  = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ThemeDoctor  = ({children}) => {
    return(
   <ImageBackground source={require('../images/doctorlogin.jpg')} style={styles.image}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
   </ImageBackground>
    );
};

export default ThemeDoctor;


const styles = StyleSheet.create({
    image: {
        //marginLeft: WIDTH ,
        // marginRight: WIDTH / 3.8,
        //marginTop: HEIGHT / 12,
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        flex:1,
      },
      container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
})