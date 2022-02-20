import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeStackNavigator from './navigation/MainForPatientStacks/HomeStackNavigatior';
import LocationsStackNavigator from './navigation/MainForPatientStacks/LocationsStackNavigator';
import ServicesPricesStackNavigator from './navigation/MainForPatientStacks/ServicesPricesStackNavigator';
import BottomTabNavigator from './PatientBottomTabNavigator';


const Drawer = createDrawerNavigator();

export const DoctorAppStack = () => {
  return (
    <Drawer.Navigator screenOptions={({navigation}) => ({
      headerStyle: {
        backgroundColor: '#551E18',

      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
          <Icon name="bars" size={25} color='#fff' />
        </TouchableOpacity>
      ),
    })}>
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen name="LocationsStack" component={LocationsStackNavigator}/>

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  }
});
