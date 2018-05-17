import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, View, TextInput, Image, TouchableHighlight, Text} from 'react-native';

import {colors} from '../../themes/theme';

export default class UserButton extends Component {
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
            onPress={!this.props.disabled ? this.props.onPress : null}
            disabled={this.props.disabled}>
          <Text style={!this.props.disabled ? styles.button : styles.buttonDisabled}>
            {this.props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

UserButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT/16,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 20,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 20,
    color: colors.primary,
  },
  buttonDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT/16,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 20,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 20,
    color: '#a9a9a9',
  },
  buttonWrapper: {
    height: 40,
    width: DEVICE_WIDTH,
    marginBottom: 6,
    alignItems: 'center',
  },
});
