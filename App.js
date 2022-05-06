import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes';
import Colors from './src/themes/Colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={Colors.primary} 
        barStyle='light-content'
      />
      <Routes />      
    </NavigationContainer>
  );
}

