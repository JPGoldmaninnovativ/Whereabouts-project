/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  View
  } from 'react-native';

import Header   from './app/components/Header';
import Bar      from './app/components/Bar';
import MainGrid from './app/components/MainGrid';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Dashboard extends React.Component {
  render() {
    return (
              < View style= {styles.container}>

                <Header />
                <Bar/>
                <MainGrid/>
              
              </View>
           );
  }
}

const styles = StyleSheet.create({

     container: {
            flex: 5, 
            backgroundColor: '#000'
    }
  
  });

AppRegistry.registerComponent('Dashboard', () => Dashboard);
