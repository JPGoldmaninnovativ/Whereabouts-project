import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'

import { colors, fonts } from '../../themes/theme'
import LoginSection from './LoginSection';
import SignupSection from './SignupSection';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
})

const routes = {
  SignIn: {
    screen: LoginSection,
    navigationOptions: {
      title: 'Sign In',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../images/signInButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  },
  SignUp: {
    screen: SignupSection,
    navigationOptions: {
      title: 'Sign Up',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../images/signUpButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )
    }
  }
}

const routeConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary,
    indicatorStyle: { backgroundColor: 'transparent' },
    labelStyle: {
      fontFamily: fonts.base,
      fontSize: 14
    },
    style: {
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      paddingBottom: 3
    },
  }
}

export default TabNavigator(routes, routeConfig)
