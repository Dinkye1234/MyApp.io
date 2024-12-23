// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Search from './src/screens/Search';
import Notifications from './src/screens/Notifitcation';
import ProfileScreen from './src/screens/Profile';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Search:Search,
    Notification:Notifications,
    Profile:ProfileScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}