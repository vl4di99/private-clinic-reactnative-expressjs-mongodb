import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../screens/Start';
import Login from '../screens/Login';
import Register from '../screens/Register';
import DoctorLogin from '../screens/DoctorLogin';
import MainForPatient from '../screens/MainForPatient';
import { PatientAppStack } from './PatientAppStack';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
      <Stack.Navigator 
      initialRouteName="Start" 
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'purple',
        headerStyle: { backgroundColor: 'transparent' },
      }}>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="DoctorLogin" component={DoctorLogin}/>
      </Stack.Navigator>
  );
};