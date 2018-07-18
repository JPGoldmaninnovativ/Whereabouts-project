import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";


import { Icon, Button, Container, Header, Content,  Left }  from  'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'


class SettingsScreen extends Component {

   

    static navigationOptions = {  
        drawerIcon:(
            <Image source={require('./assets/settings.png')} 
            style={{height:24,width:24}}/>
        )
    }

    render() {
        return (
            <Container>
            <Header> 
                <Left>
                <Ionicons name='md-menu' size={24} onPress={()=>this.props.navigation.navigate('DrawerOpen')}/>
                </Left>
            </Header>
               <Content contentContainerStyle={{ flex:1,  alignItems: 'center', justifyContent: 'center', padding: 10
                 } }> 
        
                <Text> Settings Screen </Text>
                </Content>
            </Container>
        );
    }
}
export default SettingsScreen;

