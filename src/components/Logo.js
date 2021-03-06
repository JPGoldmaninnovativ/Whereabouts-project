import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import { Styles } from  '../themes/theme';

import logoImg from '../images/ic_account_circle_black_48dp/android/drawable-xxxhdpi/ic_account_circle_black_48dp.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={Styles.logo}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>WHEREABOUTS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    fontSize: 18
  },
});
