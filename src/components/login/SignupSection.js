import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';

import SignupForm from './SignupForm';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
