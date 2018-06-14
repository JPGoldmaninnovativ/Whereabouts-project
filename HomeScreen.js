import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    SafeAreaView
} from 'react-native';


import { Icon, Button, Container, Header, Content, Left, Body, Thumbnail, width } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'



export default class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerIcon: (
            <Image source={require('./assets/home.png')}
                style={{ height: 24, width: 24 }} />
        )
    }

    render() {
        return (

            <ScrollView style={{ flex: 1, backgroundColor: '#242320' }}>
                <View style={styles.Container}>

                    <Header>
                        <Left>
                            <Ionicons name='md-menu' size={24} onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                        </Left>
                    </Header>

                    <View style={styles.top}>
                        {/* <View style={styles.image}></View> */}
                        <Text style={styles.text}>H O M E</Text>
                    </View>
                    <View style={styles.center}></View>

            
            
            
            
                    <View style={styles.photoGrid}>
                        <TouchableOpacity onPress={this.group} >
                           
                                <View style={styles.photoWrap}>
                                    <Image style={styles.photo} source={require('./assets/Umeabg.jpg')} />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={this.live}>
                                <View style={styles.photoWrap}>
                                    <Image style={styles.photo} source={require('./assets/group.jpg')} />
                                </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={this.event} >
                                <View style={styles.photoWrap}>
                                    <Image style={styles.photo} source={require('./assets/event.jpg')} />
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.todo} >
                                <View style={styles.photoWrap}>
                                    <Image style={styles.photo} source={require('./assets/todo.jpg')} />
                                </View>
                        </TouchableOpacity>


                    </View>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    top: {
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98d2c1'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#eee'
    },
    center: {
        height: '10%',
        backgroundColor: '#7fbcac'
    },
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    photoWrap:{
        margin: 2,
        height: 180,
        width: (Dimensions.get('window').width / 2) - 4,
 },
    photo:{
        flex: 1,
        width: null,
        alignSelf: 'stretch'
},
text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    fontStyle: 'normal'
  }
});

