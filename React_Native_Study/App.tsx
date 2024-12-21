import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from './component/Tab'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};


export default App;
