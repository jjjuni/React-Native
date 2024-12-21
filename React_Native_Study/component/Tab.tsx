import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from '../screens/DetailScreen'
import HomeScreen from '../screens/HomeScreen'

import Icon from 'react-native-vector-icons/Octicons';


const Tab = createBottomTabNavigator();

const TabIcon = ({ name, color }) => {
  return <Icon name={name} size={20} color={color} />
}

const TabNavigation = () => {
  return(
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#181818',
        },
        tabBarIconStyle: {
          flex: 1,
        },
        tabBarShowLabel: false,
        tabBarIcon: props => {
          let name = '';
          let color = '';
          if (route.name === 'Home') name = 'home';
          else if (route.name === 'Detail') name = 'three-bars';
          return TabIcon({ name, color: props.focused ? 'white' : '#8E8E8F' });
        }
      })}

    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
      />
      <Tab.Screen
        name='Detail'
        component={DetailScreen}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation;