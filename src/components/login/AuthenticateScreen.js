import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View, Modal} from 'react-native';
import Logo from '../Logo';
import ButtonSubmit from './ButtonSubmit';
import LoginTabs from './LoginTabs';

import Input from '../Input'
import Button from '../Button'

export default class AuthenticateScreen extends Component {
  render() {
    return (
      <Modal>
        <View style={styles.container}>
          <Input
            placeholder="Authorization Code"
            type='authCode'
            keyboardType='numeric'
            value=''
          />
          <Button
            title='Confirm'
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
