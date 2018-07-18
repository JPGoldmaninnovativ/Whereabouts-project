import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";


import { Icon, Button, Container, Header, Content, Left }  from  'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Navigator from '../../routes/Navigator';

class GroupScreen extends Component {
    static navigationOptions = {
        drawerIcon:(
            <Image source={require('./../../images/groups.png')}
            style={{height:24,width:24}}/>
        )
    }


    render() {
        return (
            <Navigator/>
        );
    }
}
export default GroupScreen;
