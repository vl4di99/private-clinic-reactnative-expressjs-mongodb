import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const ServicesPrices= () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>ServicesPrices screen!</Text>
  </View>
)

const ServicesPricesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="ServicesPrices" component={ServicesPrices} />
    </Stack.Navigator>
  )
}

export default ServicesPricesStackNavigator;