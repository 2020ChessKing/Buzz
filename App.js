import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FaceBook from './Components/facebook.js';
import Instagram from './Components/instagram.js'; 

// npm install react-navigation
// npm install react-navigation-tabs
// npm install react-native-reanimated

export default class App extends React.Component
{
  render(){
    return <AppContainer />;
  }
} 

var TabNavigator = createBottomTabNavigator({
  FaceBook : {screen : FaceBook},
  Instagram : {screen : Instagram},
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
