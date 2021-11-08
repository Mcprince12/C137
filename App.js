import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home'
import Details from './screens/Details'

export default class App extends React.Component{
render(){
  return (
    <AppContainer/>
  )
}
}

const AppStackNavigator=createStackNavigator({
  Home:{screen:Home},
  Details:{screen:Details}
}, {initialRouteName:"Home"})

const AppContainer=createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
