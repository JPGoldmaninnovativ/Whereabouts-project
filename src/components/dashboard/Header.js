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
  View,
  Text,
  Image,
  ImageBackground
  } from 'react-native';



export default class Header extends React.Component {
  render() {
    return (

            <ImageBackground style={styles.headerBackground} source={require('../../images/Header.jpg')}>

                    <View style={ styles.header}>

                        <View style={styles.profileWrap}>
                            <Image style={styles.profile} source={require('../../images/profile.jpg')}/>
                        </View>
                    </View>
            </ImageBackground>
     );
  }
}

const styles = StyleSheet.create({

   headerBackground: {
            flex: 1,
            width: null,
            alignSelf:  'stretch'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0, 0.5)'

    },
    profileWrap: {

        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0, 0.4)',
        borderWidth: 16

    },
    profile: {
                flex: 1,
                width: null,
                alignSelf: 'stretch',
                borderRadius: 100,
                borderColor: '#fff',
                borderWidth: 4
    }
  });
