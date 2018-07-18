import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
  } from 'react-native';
import { Greetings } from 'aws-amplify-react-native';

import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import Navigator from '../../routes/Navigator';
import AppScreen from './AppScreen';
import { Styles } from  '../../themes/theme';

export default class Dashboard extends Greetings {
    userGreetings(theme) {
        const user = this.props.authData || this.props.user;
        const message = this.props.signedInMessage || this.signInMessage;
        const greeting = (typeof message === 'function')? message(user.username) : message;
        return (
          <View style={Styles.app}>
            <Router sceneStyle={styles.sceneStyle}
              navigationBarStyle={{backgroundColor: 'transparent', borderBottomWidth: 0 }}
              getSceneStyle={()=>styles.sceneStyle}>
              <Scene key="root">
                <Scene key="appscreen"
                  component={AppScreen}
                  animation='fade'
                  hideNavBar={true}
                  initial={true}
                />
                <Scene key="navigator"
                  component={Navigator}
                  animation='fade'
                  hideNavBar={true}
                />
              </Scene>
            </Router>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  sceneStyle: {
    opacity: 1,
    flex: 1,
    backgroundColor: 'transparent',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },

  drawerImage:{
    height: 150,
    width: 150,
    borderRadius: 75
  }
});
