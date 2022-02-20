import { Text, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native'
import {FloatingLabelInput } from 'react-native-floating-label-input'
import { useState } from 'react';

import Logo from '../elements/Logo';
import Theme from '../theme/Theme';
import Client from '../../api/Client';

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Register = ({navigation}) => {

    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [confPassWord, setConfPassWord] = useState("");
    const [show, setShow] = useState(false);

    const register_now = () => {
      if (passWord != confPassWord) {
        Alert.alert("Passwords don't match!");
      } else {
        Client
        .post("/register", {
          username: userName,
          password: passWord,
        })
        .then((response) => {
          if(response.data === false)
          {Alert.alert("User already exists!");}
          else{
          Alert.alert("Account created! You can now login!");
          navigation.goBack();
          }
          //props.navigation.navigate(Login);
          //MainForPatient();
         //console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
      }
    };

    return(
    <Theme>
        <Logo/>
        <FloatingLabelInput
        label={'Username'}
        value={userName}
        onChangeText={(value) => setUserName(value)}
        containerStyles={{
            marginBottom: "5%", 
            borderColor: "#ABDEE6", 
            borderWidth: 3, 
            borderRadius: 15,
            height: (HEIGHT * 7) / 100,
            paddingHorizontal: 20,
            }}
            customLabelStyles={{
                colorFocused: 'red',
                fontSizeFocused: 12,
              }}
              labelStyles={{
                paddingHorizontal: 5,
              }}
      />

      <FloatingLabelInput
        label={'Password'}
        isPassword
        togglePassword={show}
        value={passWord}
        onChangeText={(value) => setPassWord(value)}
        customShowPasswordComponent={<Text>Show</Text>}
        customHidePasswordComponent={<Text>Hide</Text>}
        containerStyles={{
        marginBottom: "5%", 
        borderColor: "#ABDEE6", 
        borderWidth: 3, 
        borderRadius: 15,
        height: (HEIGHT * 7) / 100,
        paddingHorizontal: 20,
        }}
        customLabelStyles={{
            colorFocused: 'red',
            fontSizeFocused: 12,
          }}
          labelStyles={{
            paddingHorizontal: 5,
          }}
      />

<FloatingLabelInput
        label={'Confirm Password'}
        isPassword
        togglePassword={show}
        value={confPassWord}
        onChangeText={(value) => setConfPassWord(value)}
        customShowPasswordComponent={<Text>Show</Text>}
        customHidePasswordComponent={<Text>Hide</Text>}
        containerStyles={{
        marginBottom: "5%", 
        borderColor: "#ABDEE6", 
        borderWidth: 3, 
        borderRadius: 15,
        height: (HEIGHT * 7) / 100,
        paddingHorizontal: 20,
        }}
        customLabelStyles={{
            colorFocused: 'red',
            fontSizeFocused: 12,
          }}
          labelStyles={{
            paddingHorizontal: 5,
          }}
      />

        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.5}
          onPress={register_now}
        ><Text style={styles.loginButtonText}>REGISTER</Text></TouchableOpacity>
    </Theme>);
}

export default Register;

const styles = StyleSheet.create({
      loginButton: {
        backgroundColor: "#2f1a3b",
        height: (HEIGHT * 4) / 100,
        alignItems: "center",
        borderRadius: (HEIGHT * 3) / 100,
        marginTop: (HEIGHT * 3) / 100,
        width: (WIDTH * 40) / 100,
        height: (HEIGHT * 6) / 100,
        borderColor: "white",
        borderWidth: 3,
      },
      loginButtonText: {
        color: "#FFFFFF",
        paddingVertical: (HEIGHT * 1.2) / 100,
        fontSize: (HEIGHT * 2) / 100,
        textAlign: "center",
      },
})
