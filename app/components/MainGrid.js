/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View, 
  Image,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity
  } from 'react-native';


export default class MainGrid extends React.Component {
  render() {
    return (
              
          <ScrollView>
                <View style={styles.photoGrid}>
                    <TouchableOpacity onPress={this.group} style={styles.bodyItem}>
                        <View style={styles.photoWrap}>
                         <Image style={styles.photo} source={require('../asset/group.jpg')}/>
                         <Text style={styles.text}>my Activity Group</Text>
                        </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={this.live} style={styles.bodyItem}>
                         <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../asset/live.jpg')}/>
                            <Text style={styles.text}>Live & Stay</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.event} style={styles.bodyItem}>
                        <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../asset/event.jpg')}/>
                            <Text style={styles.text}>Todo & Discover</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.todo} style={styles.bodyItem}>
                        <View style={styles.photoWrap}>
                            <Image style={styles.photo} source={require('../asset/todo.jpg')}/>
                            <Text style={styles.text}>Event & Trips</Text>
                        </View>
                    </TouchableOpacity>
                        
                </View>
          </ScrollView>

           );
  }
}

const styles = StyleSheet.create({
   photoGrid: { 
       flexDirection: 'row',
       flexWrap: 'wrap',

    },
    photoWrap:{ 
            margin: 2,
            height: 120,
            width: (Dimensions.get('window').width / 2) - 4,
     },

     photo:{ 
         flex: 1,
         width: null,
         alignSelf: 'stretch'
      },
      text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        fontStyle: 'italic'
      }
  });
