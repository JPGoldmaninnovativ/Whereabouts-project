import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import LoginForm from './LoginForm';
import ButtonSubmit from './ButtonSubmit';

export default class LoginSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
        <ButtonSubmit value="LOGIN"
          onPress={() => {
            console.debug("asdf");
            //Actions.dashboard();
            }
          }
        />
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
