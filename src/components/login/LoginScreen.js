import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Logo from '../Logo';
import ButtonSubmit from './ButtonSubmit';
import LoginTabs from './LoginTabs';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <LoginTabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
