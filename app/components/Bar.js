import React, { Component } from 'react';
import {

  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
  } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Bar extends React.Component {
  render() {
    return (
          <View style= {styles.tabBar}>

              <View style={[styles.barItem, styles.barSeparator]}>
                 <View>
                  <TouchableOpacity style={styles.tabItem}>
                        <Icon name='menu' size={25} />
                        <Text style={styles.tabBottom}>Menu</Text>
                  </TouchableOpacity>
                 </View>
                
              </View>
              <View style={styles.barItem}>
                  <TouchableOpacity style={styles.tabItem}>
                         <Text style={styles.tabBottom}>Umeå Kommun</Text>
                  </TouchableOpacity>
              </View>
         </View>
      );
  }
}

const styles = StyleSheet.create({

tabBar: {
        backgroundColor: '#800000',
        height: 50,
        borderTopWidth: 1,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
barSeparator: {
      borderRightWidth: 4
},

barItem: {
  flex: 1,
  padding: 18,
  alignItems: 'center',
},
tabBottom: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold'
},
tabItem:{
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 3,
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'space-around'
}
});
