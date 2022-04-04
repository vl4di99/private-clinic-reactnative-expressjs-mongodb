import { ImageBackground, StyleSheet, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import pink from '../images/pink.png';

const WIDTH  = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Theme  = ({children}) => {
    return(
   <ImageBackground source={require('../images/pink.png')} style={styles.image}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
   </ImageBackground>
    );
};

export default Theme;


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
        maxWidth: WIDTH * 0.8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
})