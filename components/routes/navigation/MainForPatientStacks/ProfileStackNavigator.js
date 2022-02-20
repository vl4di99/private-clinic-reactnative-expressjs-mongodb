import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, AppState, ActivityIndicator } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage, {useAsyncStorage} from '@react-native-async-storage/async-storage'

import { AuthContext } from '../../../contexts/AuthProvider'

const Stack = createStackNavigator()
//const username = AuthContext.username;

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

//let LoginData = "";

var user = "";
var LoginData = "";

const Profile = () => {
  const { setIsLoggedIn } = React.useContext(AuthContext);

  useEffect(() => {
    const getLoginData = async() => {
      let parsed = await AsyncStorage.getItem('LoginData');
      LoginData = JSON.parse(parsed);
      console.log(LoginData.username);
      user = LoginData.username;
    }
    getLoginData();

  }, [])

  const logout = async () => {
    //await AsyncStorage.removeItem('@token');
    await AsyncStorage.clear();
    setIsLoggedIn(false);
  };
  console.log("SSSSS + ", LoginData);
  return(<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile screen!</Text>
    <Text>RTTT, {user}</Text>
    <TouchableOpacity onPress={logout} style={styles.logoutButton} activeOpacity={0.5}><Text style={styles.logoutButtonText}>LOGOUT</Text></TouchableOpacity>
  </View>
  );
}

const ProfileStackNavigator = () => {



  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator;

const styles = StyleSheet.create({
  logoutButton: {
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
  logoutButtonText: {
    color: "#FFFFFF",
    paddingVertical: (HEIGHT * 1.2) / 100,
    fontSize: (HEIGHT * 2) / 100,
    textAlign: "center",
  },
})