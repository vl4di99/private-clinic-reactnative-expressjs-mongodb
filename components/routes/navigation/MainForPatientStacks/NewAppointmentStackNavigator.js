import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const NewAppointment = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>NewAppointment screen!</Text>
  </View>
)

const NewAppointmentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="NewAppointment" component={NewAppointment} />
    </Stack.Navigator>
  )
}

export default NewAppointmentStackNavigator;